"use client"

import Image from "next/image"
import {
  CalendarDays,
  Moon,
  Sparkles,
  Sun
} from "lucide-react"

import { useAntuTheme } from "@/providers/ThemeProvider"

const HeroAntu = () => {
  const { phaseMode, setPhaseMode } = useAntuTheme()

  const isNight = phaseMode === "night"

  const heroContent = isNight
    ? {
        quote: '"Donde el sol habla y la luna guía..."',
        titleStart: "Deja que la luz de ",
        highlightMain: "Küyen",
        highlightSecondary: "(Luna)",
        titleEnd: " guíe tus pasos",
        description:
          "Bajo el manto estelar, el territorio andino devela su astroteología ancestral. Conéctate con sabios de la comunidad en fogones nocturnos, participa en foros de astroturismo y planifica tus pernoctaciones místicas.",
        panelLabel: "Küyen · Lunar",
        visibility: "98% despejado",
        forceLabel: "Serena (Lúcida)",
        ctaPrimary: "Explorar Mapa Ancestral",
        ctaSecondary: "Ver Experiencias"
      }
    : {
        quote: '"Donde el sol habla y la luna guía..."',
        titleStart: "Sigue la huella de ",
        highlightMain: "Antü",
        highlightSecondary: "(Sol)",
        titleEnd: "trazar tu camino",
        description:
          "Durante el día, la Araucanía vibra con volcanes imponentes, senderos sagrados custodiados por Araucarias milenarias y lagos de agua de deshielo. Explora la cartografía cultural interactiva de nuestra comunidad.",
        panelLabel: "Antü · Solar",
        visibility: "98% despejado",
        forceLabel: "Alta (Vibrante)",
        ctaPrimary: "Explorar Mapa Ancestral",
        ctaSecondary: "Ver Experiencias"
      }

  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050816]
        text-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/hero.avif"
          alt="Antü Küyen"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="
            object-cover
            opacity-[0.32]
            transition-opacity
            duration-700
          "
        />

        <div className="absolute inset-0 bg-[#050816]/55" />

        <div
          className={`
            absolute
            inset-0
            transition-all
            duration-700

            ${
              isNight
                ? `
                  bg-[radial-gradient(circle_at_70%_40%,rgba(79,70,229,0.24),transparent_42%)]
                `
                : `
                  bg-[radial-gradient(circle_at_70%_40%,rgba(249,115,22,0.20),transparent_42%)]
                `
            }
          `}
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,rgba(3,7,18,0.25),rgba(3,7,18,0.1)_50%,rgba(3,7,18,0.85))]
          "
        />
      </div>

      {/* DECORATIVE GLOW */}
      <div
        className={`
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
          h-[520px]
          w-[520px]
          rounded-full
          blur-[130px]
          transition-colors
          duration-700

          ${
            isNight
              ? "bg-indigo-600/15"
              : "bg-orange-500/10"
          }
        `}
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1320px]
          flex-col
          px-6
          pb-8
          pt-[105px]

          md:px-8

          lg:px-10
          lg:pt-[115px]

          2xl:max-w-[1360px]
        "
      >
        {/* PORTAL LABEL */}
        <div className="mb-6 w-full lg:mb-[76px]">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-slate-500/30
                bg-[#070a14]/70
                px-3
                py-1.5
                backdrop-blur-md
              "
            >
              <Sparkles
                size={11}
                className="text-indigo-300"
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-slate-300
                "
              >
                Portal biocultural · Araucanía ancestral
              </span>
            </div>

            <div
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-slate-500/25
                via-slate-500/20
                to-slate-500/10
              "
            />

            <span
              className="
                shrink-0
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-500
              "
            >
              Wallmapu
            </span>
          </div>
        </div>

        <div
          className="
            grid
            flex-1
            content-center
            items-center
            gap-16

            lg:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.72fr)]
            lg:gap-20

            xl:grid-cols-[minmax(0,760px)_minmax(360px,1fr)]
            xl:gap-24

            2xl:grid-cols-[minmax(0,790px)_390px]
            2xl:gap-32
          "
        >
          {/* LEFT */}
          <div className="max-w-[800px]">
            <p
              className={`
                mb-5
                font-mono
                text-sm
                tracking-[0.08em]

                ${
                  isNight
                    ? "text-amber-400"
                    : "text-orange-400"
                }
              `}
            >
              {heroContent.quote}
            </p>

            <h1
              className="
                max-w-[800px]
                text-[clamp(3rem,5vw,5.15rem)]
                font-bold
                leading-[0.98]
                tracking-[-0.04em]
                text-slate-50
              "
              style={{
                fontFamily: "var(--font-playfair)"
              }}
            >
              {heroContent.titleStart}

              <span
                className={
                  isNight
                    ? "bg-gradient-to-r from-indigo-200 via-violet-300 to-purple-300 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-orange-300 via-amber-400 to-orange-500 bg-clip-text text-transparent"
                }
              >
                {heroContent.highlightMain}
              </span>{" "}

              <span
                className={
                  isNight
                    ? "bg-gradient-to-r from-purple-300 to-indigo-200 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent"
                }
              >
                {heroContent.highlightSecondary}
              </span>

              <br />

              {heroContent.titleEnd}
            </h1>

            <p
              className="
                mt-7
                max-w-[650px]
                text-base
                leading-7
                text-slate-300

                md:text-[17px]
              "
            >
              {heroContent.description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:max-w-[390px]">
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <div className="flex shrink-0 items-center gap-2">
                  <Sparkles
                    size={12}
                    className="text-amber-400"
                  />

                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-amber-400
                    "
                  >
                    Selector celestial
                  </span>
                </div>

                <div
                  className="
                    h-px
                    flex-1
                    bg-gradient-to-r
                    from-indigo-400/20
                    to-indigo-400/5
                  "
                />

                <span
                  className="
                    shrink-0
                    font-mono
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-slate-500
                  "
                >
                  Sincronizador
                </span>
              </div>
            </div>

            {/* TOGGLE */}
            <div className="grid grid-cols-2 rounded-full border border-indigo-500/20 bg-[#050713]/90 p-1 shadow-[inset_0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setPhaseMode("day")}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    !isNight
                      ? "bg-orange-500 text-white"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                <Sun size={15} />
                Día (Antü)
              </button>

              <button
                type="button"
                onClick={() => setPhaseMode("night")}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isNight
                      ? `
                        bg-indigo-600
                        text-white
                        shadow-[0_0_20px_rgba(79,70,229,0.35)]
                      `
                      : `
                        text-slate-400
                        hover:text-white
                      `
                  }
                `}
              >
                <Moon size={15} />
                Noche (Küyen)
              </button>
            </div>

            {/* CELESTIAL CARD */}
            <div
              className="
                mt-5
                flex
                h-[130px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-indigo-400/10
                bg-indigo-950/20
                backdrop-blur-sm
              "
            >
              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    isNight
                      ? `
                        text-indigo-300
                        drop-shadow-[0_0_16px_rgba(165,180,252,0.5)]
                      `
                      : `
                        text-orange-300
                        drop-shadow-[0_0_16px_rgba(251,146,60,0.45)]
                      `
                  }
                `}
              >
                {isNight ? (
                  <Moon
                    size={48}
                    strokeWidth={1.5}
                  />
                ) : (
                  <Sun
                    size={48}
                    strokeWidth={1.5}
                  />
                )}
              </div>

              <span className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                {isNight
                  ? "Küyen · Lunar"
                  : "Antü · Solar"}
              </span>
            </div>

            {/* STATS */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div
                className="
                  rounded-xl
                  border
                  border-white/5
                  bg-slate-950/55
                  p-3
                  backdrop-blur-md
                "
              >
                <p className="font-mono text-[8px] uppercase text-slate-500">
                  Visibilidad
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-200">
                  {heroContent.visibility}
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-white/5
                  bg-slate-950/55
                  p-3
                  backdrop-blur-md
                "
              >
                <p className="font-mono text-[8px] uppercase text-slate-500">
                  Fuerza telúrica
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-200">
                  {isNight
                    ? "Serena (Lúcida)"
                    : "Activa (Radiante)"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-5

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-slate-950/50
              "
            >
              <CalendarDays
                size={17}
                className="text-orange-400"
              />
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400">
                Ciclo lunar de viaje (calendario ancestral)
              </p>

              <p className="mt-1 text-xs text-slate-300">
                Hoy:{" "}
                <span className="font-semibold text-orange-300">
                  Püñeñ Küyen
                </span>{" "}
                (Luna Creciente) — Excelente para caminatas reflexivas y
                diálogos comunitarios.
              </p>
            </div>
          </div>

          <div
            className="
              rounded-xl
              border
              border-white/5
              bg-slate-950/40
              px-5
              py-2.5
              font-mono
              text-[10px]
              tracking-[0.08em]
              text-slate-400
            "
          >
            8 Observatorios Locales Activos esta noche
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAntu