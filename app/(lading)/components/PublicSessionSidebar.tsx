"use client";

import { Compass } from "lucide-react";

import { useAntuTheme } from "@/providers/ThemeProvider";

const PublicSessionSidebar = () => {
	const { phaseMode } = useAntuTheme();

	const isNight = phaseMode === "night";

	return (
		<aside
			className="
				h-fit
				w-full
				rounded-2xl
				border
				border-slate-800/70
				bg-[#050a17]/55
				px-5
				py-6
				backdrop-blur-sm
			"
		>
			<div className="flex flex-col items-center text-center">
				{/* Icon */}
				<div
					className={`
						mb-4
						flex h-12 w-12
						items-center justify-center
						rounded-full
						border
						transition-colors
						duration-300

						${
							isNight
								? `
									border-indigo-500/20
									bg-indigo-500/10
									text-indigo-400
								`
								: `
									border-orange-500/20
									bg-orange-500/10
									text-orange-400
								`
						}
					`}
				>
					<Compass
						size={21}
						strokeWidth={1.8}
					/>
				</div>

				{/* Title */}
				<h3
					className="
						font-mono
						text-[13px]
						font-bold
						uppercase
						tracking-[0.08em]
						text-slate-100
					"
				>
					Tu propio camino
				</h3>

				{/* Description */}
				<p
					className="
						mt-3
						max-w-[205px]
						text-[13px]
						leading-[1.55]
						text-slate-400
					"
				>
					¡Planifica tu propia aventura!
					<br />
					Regístrate o Inicia Sesión para
					comenzar a guardar rutas y conectar
					con la comunidad.
				</p>

				{/* Actions */}
				<div className="mt-5 flex w-full flex-col gap-2.5">
					{/* <LoginModalButton
						className={`
							flex
							h-10
							w-full
							items-center
							justify-center
							rounded-xl
							text-sm
							font-semibold
							text-white
							transition-all
							duration-300
							active:scale-[0.98]

							${
								isNight
									? `
										bg-indigo-600
										hover:bg-indigo-500
										shadow-[0_0_18px_rgba(79,70,229,0.18)]
									`
									: `
										bg-orange-500
										hover:bg-orange-400
										shadow-[0_0_18px_rgba(249,115,22,0.18)]
									`
							}
						`}
					>
						Iniciar Sesión
					</LoginModalButton>

					<RegisterModalButton
						className={`
							flex
							h-10
							w-full
							items-center
							justify-center
							rounded-xl
							border
							bg-transparent
							text-sm
							font-semibold
							transition-all
							duration-300
							active:scale-[0.98]

							${
								isNight
									? `
										border-indigo-500/30
										text-indigo-300
										hover:border-indigo-400/60
										hover:bg-indigo-500/10
									`
									: `
										border-orange-500/30
										text-orange-300
										hover:border-orange-400/60
										hover:bg-orange-500/10
									`
							}
						`}
					>
						Registrarse
					</RegisterModalButton> */}
				</div>
			</div>
		</aside>
	);
};

export default PublicSessionSidebar;