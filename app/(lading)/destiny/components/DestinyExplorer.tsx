"use client";

import {
  BedDouble,
  Compass,
  MapPin,
  Mountain,
  Utensils,
} from "lucide-react";

import { FilterButton, Legend } from "./FilterButton";
import DestinyDetailsCard from "./DestinyDetailCard";
import React from "react";
import PublicSessionSidebar from "../../components/PublicSessionSidebar";
import DestinyDetailsSkeleton from "@/app/components/skeletons/DestinyDetailSkeleton";
import { DESTINIES } from "@/type/static";

export type DestinyCategory =
  | "nature"
  | "gastronomy"
  | "lodging"
  | "point";

export interface DestinyPoi {
  id: string;
  name: string;
  location: string;
  category: DestinyCategory;

  image: string;

  description: string;

  rating: number;

  price?: string;
  duration?: string;
  level?: string;

  verdict?: string;

  pros?: string[];
  cons?: string[];

  position: {
    top: string;
    left: string;
  };
}


const categoryStyles: Record<
  DestinyCategory,
  string
> = {
  nature: "bg-emerald-500",
  gastronomy: "bg-rose-500",
  lodging: "bg-indigo-500",
  point: "bg-sky-500",
};

const DestinyExplorer = () => {
  const [selectedPoi, setSelectedPoi] = React.useState<DestinyPoi | null>(null);

  const [isLoading, setIsLoading] = React.useState(false);

  const [activeCategory, setActiveCategory] = React.useState<DestinyCategory | "all">("all");

  const handleSelectPoi = async (poi: DestinyPoi) => {
    setIsLoading(true);

    /*
     * Luego esto será reemplazado por:
     *
     * const response = await fetch(...)
     * const data = await response.json()
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 700),
    );

    setSelectedPoi(poi);
    setIsLoading(false);
  };

  const handleCloseDetails = () => {
    setSelectedPoi(null);
    setIsLoading(false);
  };

  const showDetails = selectedPoi !== null || isLoading;

  const filteredDestinies = activeCategory === "all"
    ? DESTINIES : DESTINIES.filter((item) => item.category === activeCategory);

  return (
    <div
      className={`
		grid
		min-h-[calc(100dvh-104px)]
		w-full
		grid-cols-1
		gap-4
		sm:gap-5
		lg:gap-6

		${showDetails
          ? "lg:grid-cols-[250px_minmax(0,1fr)_300px]"
          : "lg:grid-cols-[250px_minmax(0,1fr)]"
        }
	`}
    >
      {/* ======================================== */}
      {/* LEFT SIDEBAR */}
      {/* ======================================== */}

      <div className="hidden lg:block">
        <PublicSessionSidebar />
      </div>
      {/* ======================================== */}
      {/* MAIN CONTENT */}
      {/* ======================================== */}

      <section className="min-w-0 space-y-4">
        {/* SEARCH */}
        <div
          className="
		hidden
		h-[46px]
		w-full
		items-center
		gap-3
		rounded-xl
		border
		border-slate-800/80
		bg-[#11182a]
		px-4

		md:flex
	"
        >
          <Compass
            size={16}
            className="shrink-0 text-slate-500"
          />

          <input
            type="text"
            placeholder="Buscar Puntos de Interés..."
            className="
			min-w-0
			flex-1
			bg-transparent
			text-sm
			text-slate-200
			outline-none
			placeholder:text-slate-500
		"
          />
        </div>

        {/* FILTERS */}

        <div
          className="
		w-full
		overflow-x-auto
		rounded-xl
		border
		border-slate-800/70
		bg-[#11182a]
		p-1

		[scrollbar-width:none]
		[&::-webkit-scrollbar]:hidden
	"
        >
          <div className="flex h-[40px] min-w-max items-center gap-1.5 sm:gap-2">
            <FilterButton
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            >
              Todos
            </FilterButton>

            <FilterButton
              active={activeCategory === "nature"}
              onClick={() => setActiveCategory("nature")}
            >
              <Mountain size={12} />
              Naturaleza
            </FilterButton>

            <FilterButton
              active={activeCategory === "gastronomy"}
              onClick={() => setActiveCategory("gastronomy")}
            >
              <Utensils size={12} />
              Gastronomía
            </FilterButton>

            <FilterButton
              active={activeCategory === "lodging"}
              onClick={() => setActiveCategory("lodging")}
            >
              <BedDouble size={12} />
              Hospedaje
            </FilterButton>

            <FilterButton
              active={activeCategory === "point"}
              onClick={() => setActiveCategory("point")}
            >
              <MapPin size={12} />
              Puntos
            </FilterButton>
          </div>
        </div>
        <div className="h-px w-full bg-slate-800/60" />

        {/* ======================================== */}
        {/* MAP */}
        {/* ======================================== */}

        <div
          className="
		relative
		h-[clamp(250px,32dvh,320px)]
		w-full
		overflow-hidden
		rounded-2xl
		border
		border-slate-700/60
		bg-[#020717]/60

		sm:h-[clamp(280px,36dvh,400px)]

		lg:h-auto
		lg:min-h-[500px]
	"
        >
          {/* Grid */}

          <div
            className="
							absolute inset-0
							opacity-40
							[background-image:linear-gradient(rgba(71,85,105,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.25)_1px,transparent_1px)]
							[background-size:40px_40px]
						"
          />

          {/* Label */}

          <div
            className="
		absolute
		left-4
		top-4
		...
		px-4
		py-2
		text-[10px]
	"
          >
            Map Grid: Chile-Andean Patagonia
          </div>

          {/* Decorative terrain */}

          <div
            className="
							absolute
							bottom-[18%]
							left-[12%]
							h-[150px]
							w-[190px]
							rotate-[-1deg]
							border-l-2
							border-t-2
							border-slate-600/40
							[clip-path:polygon(50%_0,100%_100%,0_100%)]
						"
          />

          <div
            className="
							absolute
							bottom-[15%]
							left-[32%]
							h-[130px]
							w-[180px]
							border
							border-slate-600/40
							[clip-path:polygon(50%_0,100%_100%,0_100%)]
						"
          />

          <div
            className="
							absolute
							bottom-[29%]
							left-[54%]
							h-[140px]
							w-[200px]
							border
							border-slate-600/40
							[clip-path:polygon(50%_0,100%_100%,0_100%)]
						"
          />

          {/* POI */}

          {filteredDestinies.map(
            (poi) => {
              const selected = selectedPoi?.id === poi.id;

              return (
                <button
                  key={poi.id}
                  type="button"
                  onClick={() => handleSelectPoi(poi)}
                  style={{
                    top: poi.position.top,
                    left: poi.position.left,
                  }}
                  className="
										group
										absolute
										z-30
										-translate-x-1/2
										-translate-y-1/2
									"
                >
                  <div
                    className={`
		flex
		h-9
		w-9
		items-center
		justify-center
		rounded-full
		border-2
		border-white/70
		text-white
		shadow-lg
		transition-all
		duration-200

		sm:h-8
		sm:w-8

		${categoryStyles[poi.category]}

		${selected
                        ? "scale-125 ring-4 ring-orange-400/20"
                        : "group-hover:scale-110"
                      }
	`}
                  >
                    <MapPin size={14} />
                  </div>

                  <span
                    className={`
		pointer-events-none
		absolute
		left-1/2
		top-10
		z-40
		-translate-x-1/2
		whitespace-nowrap
		rounded-md
		border
		border-slate-700
		bg-[#060a15]/95
		px-2
		py-1
		text-[9px]
		font-semibold
		text-white

		sm:top-9
		sm:text-[10px]

		${selected
                        ? "block"
                        : "hidden group-hover:block"
                      }
	`}
                  >
                    {poi.name}
                  </span>
                </button>
              );
            },
          )}
        </div>

        {/* LEGEND */}

        <div
          className="
		flex
		min-h-[40px]
		flex-wrap
		items-center
		gap-x-3
		gap-y-2
		font-mono
		text-[8px]
		text-slate-400

		sm:gap-x-5
		sm:text-[9px]
	"
        >
          <Legend
            className="bg-emerald-500"
            label="naturaleza"
          />

          <Legend
            className="bg-indigo-500"
            label="hospedaje"
          />

          <Legend
            className="bg-rose-500"
            label="gastronomía"
          />

          <Legend
            className="bg-sky-500"
            label="miradores / puntos"
          />

          <Legend
            className="bg-amber-500"
            label="seleccionado / ruta"
          />
        </div>
      </section>

      {/* ======================================== */}
      {/* RIGHT DETAILS */}
      {/* ======================================== */}

      {showDetails && (
        <aside
          className="
			h-[clamp(250px,32dvh,320px)]
			min-w-0
			w-full

			sm:h-[clamp(280px,36dvh,400px)]

			lg:sticky
			lg:top-[100px]
			lg:h-auto
			lg:self-start
		"
        >
          {isLoading ? (
            <DestinyDetailsSkeleton />
          ) : selectedPoi ? (
            <DestinyDetailsCard
              poi={selectedPoi}
              onClose={handleCloseDetails}
            />
          ) : null}
        </aside>
      )}
    </div>
  );
};

export default DestinyExplorer;