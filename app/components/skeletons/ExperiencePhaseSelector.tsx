"use client";

import { Moon, Sun } from "lucide-react";

import { useAntuTheme } from "@/providers/ThemeProvider";

const ExperiencePhaseSelector = () => {
  const {
    phaseMode,
    setPhaseMode,
  } = useAntuTheme();

  const isNight =
    phaseMode === "night";

  return (
    <div>
      {/* SELECTOR */}

      <div
        className="
					grid
					h-[48px]
					w-full
					grid-cols-2
					rounded-xl
					border
					border-slate-800/70
					bg-[#11182a]
					p-1
				"
      >
        <button
          type="button"
          onClick={() =>
            setPhaseMode("day")
          }
          className={`
						flex
						items-center
						justify-center
						gap-2
						rounded-lg
						border
						font-mono
						text-[11px]
						font-bold
						transition-all
						duration-300

						${!isNight
              ? `
									border-orange-500/50
									bg-orange-500/10
									text-orange-300
									shadow-[0_0_16px_rgba(249,115,22,0.12)]
								`
              : `
									border-transparent
									text-slate-500
									hover:text-slate-300
								`
            }
					`}
        >
          <Sun size={15} />

          SOL (ANTÜ)

          <span>☀️</span>
        </button>

        <button
          type="button"
          onClick={() =>
            setPhaseMode("night")
          }
          className={`
						flex
						items-center
						justify-center
						gap-2
						rounded-lg
						border
						font-mono
						text-[11px]
						font-bold
						transition-all
						duration-300

						${isNight
              ? `
									border-indigo-500/50
									bg-indigo-500/10
									text-indigo-300
									shadow-[0_0_16px_rgba(99,102,241,0.12)]
								`
              : `
									border-transparent
									text-slate-500
									hover:text-slate-300
								`
            }
					`}
        >
          <Moon size={15} />

          LUNA (KÜYEN)

          <span>🌙</span>
        </button>
      </div>

      {/* PHASE */}

      <div
        className="
					flex
					h-[46px]
					items-center
					border-b
					border-slate-800/70
					px-1
				"
      >
        <span
          className={`
						font-mono
						text-[10px]
						font-semibold

						${isNight
              ? "text-indigo-400"
              : "text-orange-400"
            }
					`}
        >
          {isNight
            ? "● Luna Creciente 🌒 (6% visibilidad)"
            : "● Sol activo ☀️ (Ciclo diurno)"}
        </span>
      </div>
    </div>
  );
};

export default ExperiencePhaseSelector;