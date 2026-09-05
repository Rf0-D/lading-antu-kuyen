"use client"

import Image from "next/image"
import { Heart, MessageSquare } from "lucide-react"

import { useAntuTheme } from "@/providers/ThemeProvider"
import { CommunityThread } from "./CommunityTheadList"

interface CommunityThreadCardProps {
  thread: CommunityThread
}

const getPublicImagePath = (path: string) => {
  return path.startsWith("/public/")
    ? path.replace("/public/", "/")
    : path
}

const CommunityThreadCard = ({
  thread
}: CommunityThreadCardProps) => {
  const { phaseMode } = useAntuTheme()

  const isNight = phaseMode === "night"
  const avatarSrc = getPublicImagePath(thread.author.avatar)

  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-800/70
        bg-[#050a17]/70
        p-5
        transition-colors
        hover:border-slate-700/80
      "
    >
      {/* CATEGORY / DATE */}
      <div className="flex items-start justify-between gap-4">
        <span
          className={`
            rounded-full
            px-3
            py-1
            font-mono
            text-[9px]
            font-bold
            uppercase
            ${
              isNight
                ? `
                  bg-indigo-500/10
                  text-indigo-300
                `
                : `
                  bg-amber-500/10
                  text-amber-400
                `
            }
          `}
        >
          {thread.category}
        </span>

        <span className="font-mono text-[10px] text-slate-500">
          {thread.date}
        </span>
      </div>

      {/* TITLE */}
      <h3
        className="
          mt-3
          text-base
          font-bold
          leading-6
          text-white
        "
      >
        {thread.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mt-1
          line-clamp-2
          text-xs
          leading-5
          text-slate-400
        "
      >
        {thread.description}
      </p>

      {/* TAGS */}
      <div className="mt-4 flex flex-wrap gap-2">
        {thread.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-md
              border
              border-slate-700/60
              bg-slate-900/50
              px-2
              py-1
              text-[9px]
              text-slate-400
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="my-4 h-px bg-slate-800/60" />

      {/* FOOTER */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
            <Image
              src={avatarSrc}
              alt={thread.author.name}
              fill
              unoptimized
              className="object-cover"
              sizes="28px"
            />
          </div>

          <span className="truncate text-[11px] font-semibold text-slate-300">
            {thread.author.name}
          </span>

          <span
            className="
              hidden
              rounded-md
              bg-slate-800/60
              px-2
              py-1
              text-[8px]
              text-slate-500
              sm:block
            "
          >
            {thread.author.role}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1">
            <Heart size={15} />

            <span className="text-[10px]">
              {thread.likes}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <MessageSquare size={15} />

            <span className="text-[10px]">
              {thread.replies} respuestas
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CommunityThreadCard