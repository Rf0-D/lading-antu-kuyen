"use client";

import Image from "next/image";
import {
	Bookmark,
	CalendarPlus,
	Clock3,
	DollarSign,
	Sparkles,
	Star,
	X,
} from "lucide-react";

import type { DestinyPoi } from "./DestinyExplorer";
import { DetailMetric, getCategoryLabel } from "./DetailMetric";
import { assetPath } from "@/lib/assetPath";

interface DestinyDetailsCardProps {
	poi: DestinyPoi;
	onClose: () => void;
}

const DestinyDetailsCard = ({
	poi,
	onClose,
}: DestinyDetailsCardProps) => {
	return (
		<div
			className="
				flex
				w-full
				flex-col
				overflow-hidden
				rounded-xl
				border
				border-slate-800/80
				bg-[#080d19]/95
				shadow-[0_20px_60px_rgba(0,0,0,0.35)]
				backdrop-blur-xl

				sm:rounded-2xl

				lg:max-h-[calc(100dvh-120px)]
			"
		>
			{/* ===================================================== */}
			{/* IMAGE */}
			{/* ===================================================== */}

			<div
				className="
					relative
					h-[165px]
					shrink-0

					sm:h-[190px]
				"
			>
				<Image
					src={poi.image}
					alt={poi.name}
					fill
					className="object-cover"
					sizes="
						(max-width: 640px) 100vw,
						(max-width: 1024px) 100vw,
						300px
					"
				/>

				<div
					className="
						absolute
						inset-0
						bg-gradient-to-t
						from-[#080d19]
						via-transparent
						to-transparent
					"
				/>

				{/* Category */}

				<div
					className="
						absolute
						left-2.5
						top-2.5
						rounded-full
						bg-[#080d19]/85
						px-2.5
						py-1
						font-mono
						text-[8px]
						font-bold
						uppercase
						text-white
						backdrop-blur-md

						sm:left-3
						sm:top-3
						sm:px-3
						sm:text-[9px]
					"
				>
					{getCategoryLabel(poi.category)}
				</div>

				{/* Actions */}

				<div
					className="
						absolute
						right-2.5
						top-2.5
						flex
						gap-2

						sm:right-3
						sm:top-3
					"
				>
					<button
						type="button"
						className="
							flex
							h-10
							w-10
							items-center
							justify-center
							rounded-xl
							bg-amber-500
							text-slate-950
							transition-transform
							active:scale-95
							sm:h-9
							sm:w-9
							sm:hover:scale-105
						"
						aria-label="Guardar destino"
					>
						<Bookmark size={16} />
					</button>

					<button
						type="button"
						onClick={onClose}
						className="
							flex
							h-10
							w-10
							items-center
							justify-center
							rounded-xl
							bg-slate-900/90
							text-slate-300
							backdrop-blur-md
							transition-colors
							active:scale-95
							hover:text-white

							sm:h-9
							sm:w-9
						"
						aria-label="Cerrar detalle"
					>
						<X size={17} />
					</button>
				</div>
			</div>

			{/* ===================================================== */}
			{/* CONTENT */}
			{/* ===================================================== */}

			<div
				className="
					min-h-0
					flex-1

					lg:overflow-y-auto

					lg:[scrollbar-color:rgba(99,102,241,0.7)_rgba(15,23,42,0.35)]
					lg:[&::-webkit-scrollbar]:w-[1px]
					lg:[&::-webkit-scrollbar-track]:rounded-full
					lg:[&::-webkit-scrollbar-track]:bg-slate-900/30
					lg:[&::-webkit-scrollbar-thumb]:rounded-full
					lg:[&::-webkit-scrollbar-thumb]:bg-indigo-500/70
					lg:hover:[&::-webkit-scrollbar-thumb]:bg-indigo-400
				"
			>
				<div
					className="
						space-y-4
						p-3.5

						sm:space-y-5
						sm:p-4
					"
				>
					{/* ================================================= */}
					{/* TITLE */}
					{/* ================================================= */}

					<div>
						<div
							className="
								flex
								items-start
								justify-between
								gap-3
							"
						>
							<h2
								className="
									min-w-0
									flex-1
									text-[15px]
									font-bold
									leading-snug
									text-white

									sm:text-base
								"
							>
								{poi.name}
							</h2>

							<div
								className="
									flex
									shrink-0
									items-center
									gap-1
									text-xs
									font-bold
									text-amber-400
								"
							>
								<Star
									size={13}
									fill="currentColor"
								/>

								{poi.rating}
							</div>
						</div>

						<p
							className="
								mt-1
								text-[11px]
								leading-relaxed
								text-slate-500

								sm:text-xs
							"
						>
							{poi.location}
						</p>
					</div>

					{/* ================================================= */}
					{/* DESCRIPTION */}
					{/* ================================================= */}

					<p
						className="
							text-[11px]
							leading-[1.7]
							text-slate-400

							sm:text-xs
							sm:leading-[1.75]
						"
					>
						{poi.description}
					</p>

					{/* ================================================= */}
					{/* STATS */}
					{/* ================================================= */}

					<div
						className="
							grid
							grid-cols-3
							gap-1
							border-y
							border-slate-800/70
							py-3

							sm:gap-2
							sm:py-4
						"
					>
						<DetailMetric
							icon={<DollarSign size={15} />}
							value={poi.price ?? "Consultar"}
						/>

						<DetailMetric
							icon={<Clock3 size={15} />}
							value={poi.duration ?? "Variable"}
						/>

						<DetailMetric
							icon={<Star size={15} />}
							value={poi.level ?? "-"}
						/>
					</div>

					{/* ================================================= */}
					{/* AI TITLE */}
					{/* ================================================= */}

					<div
						className="
							font-mono
							text-[8px]
							font-bold
							uppercase
							tracking-[0.12em]
							text-slate-500

							sm:text-[9px]
						"
					>
						Síntesis inteligente IA
					</div>

					{/* ================================================= */}
					{/* VERDICT */}
					{/* ================================================= */}

					{poi.verdict && (
						<div
							className="
								rounded-xl
								border
								border-amber-500/20
								bg-amber-500/[0.035]
								p-3

								sm:p-4
							"
						>
							<div
								className="
									flex
									items-center
									gap-2
									font-mono
									text-[8px]
									font-bold
									uppercase
									text-amber-400

									sm:text-[9px]
								"
							>
								<Sparkles size={12} />

								Veredicto Antü-Küyen
							</div>

							<p
								className="
									mt-2.5
									text-[11px]
									italic
									leading-5
									text-slate-300

									sm:mt-3
									sm:text-xs
								"
							>
								&quot;
								{poi.verdict}
								&quot;
							</p>

							<div className="my-3 h-px bg-slate-800/70 sm:my-4" />

							{/* ============================================= */}
							{/* PROS / CONS */}
							{/* ============================================= */}

							<div
								className="
									grid
									grid-cols-1
									gap-4

									sm:grid-cols-2
								"
							>
								<div>
									<p
										className="
											mb-2
											font-mono
											text-[8px]
											font-bold
											uppercase
											text-emerald-400
										"
									>
										Pros
									</p>

									<ul className="space-y-1.5">
										{poi.pros?.map((pro) => (
											<li
												key={pro}
												className="
													flex
													gap-2
													text-[10px]
													leading-relaxed
													text-slate-400
												"
											>
												<span className="shrink-0 text-emerald-400">
													•
												</span>

												<span>
													{pro}
												</span>
											</li>
										))}
									</ul>
								</div>

								<div>
									<p
										className="
											mb-2
											font-mono
											text-[8px]
											font-bold
											uppercase
											text-rose-400
										"
									>
										Contras
									</p>

									<ul className="space-y-1.5">
										{poi.cons?.map((con) => (
											<li
												key={con}
												className="
													flex
													gap-2
													text-[10px]
													leading-relaxed
													text-slate-400
												"
											>
												<span className="shrink-0 text-rose-400">
													•
												</span>

												<span>
													{con}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* ================================================= */}
					{/* REVIEWS */}
					{/* ================================================= */}

					<div>
						<p
							className="
								mb-3
								font-mono
								text-[8px]
								font-bold
								uppercase
								text-slate-500

								sm:text-[9px]
							"
						>
							Opiniones recientes
						</p>

						<div
							className="
								rounded-xl
								border-l-2
								border-amber-500
								bg-slate-900/30
								p-3
							"
						>
							<div
								className="
									flex
									flex-wrap
									items-center
									justify-between
									gap-x-3
									gap-y-1
								"
							>
								<span
									className="
										text-[11px]
										font-semibold
										text-slate-200
									"
								>
									Mateo Silva
								</span>

								<span
									className="
										font-mono
										text-[8px]
										text-slate-500
									"
								>
									2026-05-20
								</span>
							</div>

							<div className="mt-1 text-[10px] text-amber-400">
								★★★★★
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ===================================================== */}
			{/* FOOTER */}
			{/* ===================================================== */}

			<div
				className="
					grid
					shrink-0
					grid-cols-1
					gap-2
					border-t
					border-slate-800
					bg-[#080d19]
					p-3

					sm:grid-cols-[1fr_1.1fr]
					sm:gap-3
					sm:p-4
				"
			>
				<button
					type="button"
					className="
						h-11
						w-full
						truncate
						rounded-xl
						border
						border-amber-500/20
						bg-amber-500/5
						px-3
						text-xs
						font-semibold
						text-white
						transition-colors
						active:scale-[0.98]
						hover:bg-amber-500/10

						sm:h-10
					"
				>
					Expedición Voyager
				</button>

				<button
					type="button"
					className="
						flex
						h-11
						w-full
						items-center
						justify-center
						gap-2
						rounded-xl
						bg-amber-500
						text-xs
						font-bold
						text-slate-950
						transition-colors
						active:scale-[0.98]
						hover:bg-amber-400

						sm:h-10
					"
				>
					<CalendarPlus size={14} />

					Agendar
				</button>
			</div>
		</div>
	);
};

export default DestinyDetailsCard;