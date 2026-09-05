"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPinned,
  Search,
  Sparkles,
  UsersRound,
  X
} from "lucide-react"
import { usePathname } from "next/navigation"

import { useAntuTheme } from "@/providers/ThemeProvider"

const HeaderAntu = () => {
  const pathname = usePathname()
  const { phaseMode } = useAntuTheme()

  const isNight = phaseMode === "night"

  const [searchOpen, setSearchOpen] = useState(false)
  const [search, setSearch] = useState("")

  const navigationItems = [
    {
      label: "Destinos",
      shortLabel: "Destinos",
      href: "/destiny",
      icon: MapPinned
    },
    {
      label: "Experiencias",
      shortLabel: "Exper.",
      href: "/experiences",
      icon: Sparkles
    },
    {
      label: "Comunidades",
      shortLabel: "Comun.",
      href: "/comunities",
      icon: UsersRound
    }
  ]

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const searchContext = pathname.startsWith("/destiny")
    ? {
        title: "Buscar destinos",
        placeholder: "Buscar destinos, lugares o puntos de interés..."
      }
    : pathname.startsWith("/experiences")
      ? {
          title: "Buscar experiencias",
          placeholder: "Buscar experiencias..."
        }
      : pathname.startsWith("/comunities")
        ? {
            title: "Buscar comunidades",
            placeholder: "Buscar comunidades, temas o publicaciones..."
          }
        : {
            title: "Buscar en Antü Küyen",
            placeholder: "Buscar destinos, experiencias o comunidades..."
          }

  const handleCloseSearch = () => {
    setSearchOpen(false)
  }

  return (
    <>
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-3
          z-50
          px-3

          sm:top-4
          sm:px-4

          md:px-8
        "
      >
        <div
          className={`
            mx-auto
            max-w-[1360px]
            rounded-[20px]
            border
            backdrop-blur-[18px]
            transition-all
            duration-500

            sm:rounded-[24px]

            ${
              isNight
                ? `
                  border-indigo-500/35
                  bg-[linear-gradient(180deg,rgba(9,12,27,0.70),rgba(9,12,27,0.52))]
                  shadow-[0_0_26px_rgba(79,70,229,0.14)]
                `
                : `
                  border-orange-500/40
                  bg-[linear-gradient(180deg,rgba(44,28,20,0.62),rgba(20,15,18,0.45))]
                  shadow-[0_0_28px_rgba(249,115,22,0.18)]
                `
            }
          `}
        >
          <nav
            className="
              grid
              h-[58px]
              grid-cols-[40px_minmax(0,1fr)_40px]
              items-center
              px-3

              sm:h-[62px]
              sm:px-4

              md:flex
              md:justify-between
              md:px-7
            "
          >
            {/* MOBILE LEFT SPACER */}
            <div className="h-10 w-10 md:hidden" />

            {/* LOGO */}

            <Link
              href="/"
              className="
                flex
                min-w-0
                items-center
                justify-center
                gap-2.5

                md:justify-start
              "
            >
              <Image
                src="/icons/antukuyen-header-32x32.png"
                width={32}
                height={32}
                alt="Antü Küyen"
                priority
                unoptimized
                className="
                  h-7
                  w-7
                  shrink-0

                  sm:h-8
                  sm:w-8
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-base
                  font-bold
                  text-white

                  sm:text-lg
                "
                style={{
                  fontFamily: "var(--font-playfair)"
                }}
              >
                Antü{" "}

                <span
                  className={
                    isNight
                      ? "text-indigo-400"
                      : "text-orange-400"
                  }
                >
                  •
                </span>{" "}

                Küyen
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}

            <div className="hidden items-center gap-9 md:flex">
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(item.href)

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group
                      relative
                      flex
                      h-[62px]
                      items-center
                      text-sm
                      font-medium
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? isNight
                            ? "text-indigo-300"
                            : "text-orange-300"
                          : "text-slate-300 hover:text-white"
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        bottom-[5px]
                        left-0
                        h-[2px]
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? isNight
                              ? `
                                w-full
                                bg-indigo-400
                                opacity-100
                                shadow-[0_0_8px_rgba(129,140,248,0.6)]
                              `
                              : `
                                w-full
                                bg-orange-400
                                opacity-100
                                shadow-[0_0_8px_rgba(251,146,60,0.6)]
                              `
                            : `
                              w-0
                              opacity-0
                            `
                        }
                      `}
                    />
                  </Link>
                )
              })}
            </div>

            {/* RIGHT */}

            <div className="flex justify-end md:w-[120px]">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  transition-all
                  duration-200

                  md:hidden

                  ${
                    isNight
                      ? `
                        text-indigo-300
                        hover:bg-indigo-500/10
                        active:bg-indigo-500/20
                      `
                      : `
                        text-orange-300
                        hover:bg-orange-500/10
                        active:bg-orange-500/20
                      `
                  }
                `}
                aria-label="Buscar"
              >
                <Search size={19} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ===================================================== */}
      {/* MOBILE SEARCH */}
      {/* ===================================================== */}

      {searchOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            md:hidden
          "
        >
          <button
            type="button"
            onClick={handleCloseSearch}
            aria-label="Cerrar búsqueda"
            className="
              absolute
              inset-0
              h-full
              w-full
              bg-black/70
              backdrop-blur-[3px]
            "
          />

          <div
            className={`
              absolute
              left-0
              right-0
              top-0
              z-10
              max-h-[80dvh]
              overflow-hidden
              rounded-b-[28px]
              border-b
              shadow-[0_25px_80px_rgba(0,0,0,0.50)]

              ${
                isNight
                  ? `
                    border-indigo-500/25
                    bg-[#080d19]
                  `
                  : `
                    border-orange-500/25
                    bg-[#17100d]
                  `
              }
            `}
          >
            <div
              className="
                px-4
                pb-5
                pt-[max(16px,env(safe-area-inset-top))]
              "
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white">
                    {searchContext.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Explora Antü Küyen
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCloseSearch}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-900/80
                    text-slate-400
                    transition-all
                    active:scale-95
                    active:bg-slate-800
                    active:text-white
                  "
                  aria-label="Cerrar"
                >
                  <X size={17} />
                </button>
              </div>

              <div
                className={`
                  mt-4
                  flex
                  h-[48px]
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  border
                  px-4
                  transition-colors

                  ${
                    isNight
                      ? `
                        border-indigo-500/20
                        bg-[#11182a]
                        focus-within:border-indigo-500/45
                      `
                      : `
                        border-orange-500/20
                        bg-[#1b1412]
                        focus-within:border-orange-500/45
                      `
                  }
                `}
              >
                <Search
                  size={17}
                  className={
                    isNight
                      ? "shrink-0 text-indigo-400"
                      : "shrink-0 text-orange-400"
                  }
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder={searchContext.placeholder}
                  autoFocus
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-sm
                    text-slate-200
                    outline-none
                    placeholder:text-slate-600
                  "
                />

                {search.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-slate-500
                      transition-colors
                      active:bg-white/5
                      active:text-white
                    "
                    aria-label="Limpiar búsqueda"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div
                className="
                  mt-4
                  max-h-[55dvh]
                  overflow-y-auto
                  overscroll-contain

                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                {search.trim() ? (
                  <div>
                    <p
                      className="
                        font-mono
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-600
                      "
                    >
                      Resultados
                    </p>

                    <div
                      className="
                        mt-3
                        rounded-xl
                        border
                        border-slate-800/80
                        bg-slate-900/30
                        p-4
                      "
                    >
                      <p className="text-xs text-slate-500">
                        Buscando por
                      </p>

                      <p className="mt-1 break-words text-sm font-semibold text-slate-200">
                        &quot;{search}&quot;
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="py-5 text-center">
                    <div
                      className={`
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl

                        ${
                          isNight
                            ? "bg-indigo-500/5 text-indigo-400"
                            : "bg-orange-500/5 text-orange-400"
                        }
                      `}
                    >
                      <Search size={20} />
                    </div>

                    <p className="mt-3 text-xs font-medium text-slate-400">
                      {searchContext.title}
                    </p>

                    <p
                      className="
                        mx-auto
                        mt-1
                        max-w-[260px]
                        text-[10px]
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      Escribe para comenzar a explorar.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================== */}
      {/* MOBILE BOTTOM NAV */}
      {/* ===================================================== */}

      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          px-3
          pb-[max(8px,env(safe-area-inset-bottom))]

          md:hidden
        "
      >
        <div
          className={`
            mx-auto
            grid
            h-[68px]
            max-w-[420px]
            grid-cols-3
            items-center
            rounded-[22px]
            border
            px-2
            backdrop-blur-2xl

            ${
              isNight
                ? `
                  border-indigo-500/30
                  bg-[#070b18]/95
                  shadow-[0_-8px_35px_rgba(49,46,129,0.20)]
                `
                : `
                  border-orange-500/30
                  bg-[#130e0c]/95
                  shadow-[0_-8px_35px_rgba(249,115,22,0.17)]
                `
            }
          `}
        >
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = isActiveRoute(item.href)

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  group
                  relative
                  flex
                  h-[56px]
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  rounded-2xl
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? isNight
                        ? "text-indigo-300"
                        : "text-orange-300"
                      : "text-slate-500 active:bg-white/5"
                  }
                `}
              >
                {isActive && (
                  <span
                    className={`
                      absolute
                      top-0
                      h-[2px]
                      w-7
                      rounded-full

                      ${
                        isNight
                          ? `
                            bg-indigo-400
                            shadow-[0_0_8px_rgba(129,140,248,0.7)]
                          `
                          : `
                            bg-orange-400
                            shadow-[0_0_8px_rgba(251,146,60,0.7)]
                          `
                      }
                    `}
                  />
                )}

                <Icon
                  size={19}
                  strokeWidth={isActive ? 2.4 : 1.8}
                />

                <span
                  className={`
                    max-w-full
                    truncate
                    text-[9px]
                    font-medium

                    min-[380px]:text-[10px]

                    ${isActive ? "font-semibold" : ""}
                  `}
                >
                  {item.shortLabel}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default HeaderAntu