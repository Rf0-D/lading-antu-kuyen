"use client"

import Image from "next/image"
import {
  Copy,
  Heart,
  MapPin,
  MessageSquare
} from "lucide-react"

export interface ExperienceItem {
  id: string
  author: {
    name: string
    role: string
    avatar: string
  }
  copies: number
  image: string
  price?: string
  location: string
  description: string
  tags: string[]
  likes: number
  comments: number
}

interface ExperienceCardProps {
  experience: ExperienceItem
}

const getPublicImagePath = (path: string) => {
  return path.startsWith("/public/")
    ? path.replace("/public/", "/")
    : path
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const avatarSrc = getPublicImagePath(experience.author.avatar)
  const imageSrc = getPublicImagePath(experience.image)

  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800/70
        bg-[#050a17]/70
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          min-h-[74px]
          items-center
          justify-between
          px-5
          py-3
        "
      >
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-orange-500/30">
            <Image
              src={avatarSrc}
              alt={experience.author.name}
              fill
              unoptimized
              className="object-cover"
              sizes="40px"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">
              {experience.author.name}
            </h3>

            <p className="mt-1 text-xs font-semibold text-orange-400">
              {experience.author.role}
            </p>
          </div>
        </div>

        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-xl
            border
            border-slate-700/70
            bg-slate-900/50
            px-3
            py-1.5
            text-xs
            text-slate-400
          "
        >
          <Copy size={14} />
          {experience.copies} copias
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative h-[320px] w-full">
        <Image
          src={imageSrc}
          alt={experience.location}
          fill
          unoptimized
          className="object-cover"
          sizes="700px"
        />

        {experience.price && (
          <div
            className="
              absolute
              right-4
              top-4
              rounded-full
              border
              border-slate-600
              bg-[#0a101d]/90
              px-4
              py-1.5
              font-mono
              text-[11px]
              font-bold
              text-white
              backdrop-blur-md
            "
          >
            {experience.price}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <MapPin
            size={14}
            className="text-pink-500"
          />

          {experience.location}
        </div>

        <p
          className="
            mt-5
            text-[15px]
            leading-6
            text-slate-300
          "
        >
          {experience.description}
        </p>

        {/* TAGS */}
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md
                border
                border-orange-500/30
                bg-orange-500/[0.04]
                px-2.5
                py-1
                text-[11px]
                font-semibold
                text-orange-400
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="my-4 h-px bg-slate-700/60" />

        {/* FOOTER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Heart size={19} />

              <span className="text-sm">
                {experience.likes}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <MessageSquare size={19} />

              <span className="text-sm">
                {experience.comments}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="
              flex
              h-11
              w-full
              min-w-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-orange-600
              px-3
              text-[11px]
              font-bold
              text-white
              transition-all
              active:scale-[0.98]
              hover:bg-orange-500

              sm:h-10
              sm:w-auto
              sm:px-4
              sm:text-xs

              md:px-5
            "
          >
            <Copy
              size={15}
              className="shrink-0"
            />

            <span>
              Copiar Ruta al Planificador
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard