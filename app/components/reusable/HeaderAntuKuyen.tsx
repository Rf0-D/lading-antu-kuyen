"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useAntuTheme } from "@/providers/ThemeProvider";
import { usePathname } from "next/navigation";
import { assetPath } from "@/lib/assetPath";
const HeaderAntu = () => {

	const pathname = usePathname();

	const { phaseMode } = useAntuTheme();
	const isNight = phaseMode === "night";
	const [open, setOpen] = useState(false);
	const navigationItems = [
		{
			label: "Destinos",
			href: "/destiny",
		},
		{
			label: "Experiencias",
			href:"/experiences",
		},
		{
			label: "Comunidades",
			href:"/comunities",
		},
	];

	const isActiveRoute = (href: string) => {
		return (pathname === href || pathname.startsWith(`${href}/`));
	};



	return (
		<header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8">
			<div
				className={`
					mx-auto
					max-w-[1360px]
					rounded-[24px]
					border
					backdrop-blur-[18px]
					transition-all
					duration-500

					${isNight
						? `
								border-indigo-500/35
								bg-[linear-gradient(
									180deg,
									rgba(9,12,27,0.58),
									rgba(9,12,27,0.34)
								)]
								shadow-[0_0_26px_rgba(79,70,229,0.14)]
							`
						: `
								border-orange-500/40
								bg-[linear-gradient(
									180deg,
									rgba(44,28,20,0.48),
									rgba(20,15,18,0.30)
								)]
								shadow-[0_0_28px_rgba(249,115,22,0.18)]
							`
					}
				`}
			>
				<nav className="flex h-[62px] items-center justify-between px-6 md:px-7">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-3"
					>
						<Image
							src={assetPath("/icons/antukuyen-header-32x32.png")}
							width={32}
							height={32}
							alt="Antü Küyen"
							priority
						/>

						<span
							className="text-lg font-bold text-white"
							style={{
								fontFamily:
									"var(--font-playfair)",
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

					{/* Desktop Navigation */}
					<div className="hidden items-center gap-9 md:flex">
						{navigationItems.map((item) => {
							const isActive = isActiveRoute(item.href);

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

					${isActive
											? isNight
												? "text-indigo-300"
												: "text-orange-300"
											: "text-slate-300 hover:text-white"
										}
				`}
								>
									{item.label}

									{/* Línea activa */}
									<span
										className={`
						absolute
						bottom-[5px]
						left-0
						h-[2px]
						rounded-full
						transition-all
						duration-300

						${isActive
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
							);
						})}
					</div>
					{/* Actions */}
					<div className="hidden items-center gap-3 md:flex">
						{/* {!isAuthenticated && (
							<>
								<LoginModalButton
									className="
										px-3 py-2
										text-sm font-medium
										text-slate-300
										transition-colors
										hover:text-white
									"
								>
									Ingresar
								</LoginModalButton>

								<RegisterModalButton
									className={`
										rounded-2xl
										px-5 py-2.5
										text-sm
										font-semibold
										text-white
										transition-all
										active:scale-95

										${isNight
											? "bg-indigo-600 hover:bg-indigo-500"
											: "bg-orange-600 hover:bg-orange-500"
										}
									`}
								>
									Registrarse
								</RegisterModalButton>
							</>
						)} */}
					</div>

					{/* Mobile Menu */}
					<button
						type="button"
						onClick={() =>
							setOpen((previous) => !previous)
						}
						className="
							rounded-lg
							p-2
							text-slate-300
							transition-colors
							hover:bg-white/5
							hover:text-white
							md:hidden
						"
						aria-label="Abrir menú"
					>
						{open ? (
							<X size={21} />
						) : (
							<Menu size={21} />
						)}
					</button>
				</nav>

				{/* Mobile Navigation */}
				{open && (
					<div
						className="
							border-t
							border-white/5
							px-5
							pb-5
							pt-4
							md:hidden
						"
					>
						<div className="hidden items-center gap-9 md:flex">
							{navigationItems.map((item) => {
								const isActive = isActiveRoute(item.href);

								return (
									<Link
										key={item.label}
										href={item.href}
										className={`group relative flex h-[62px] items-center text-sm font-medium transition-colors duration-300
					${isActive ? isNight ? "text-indigo-300" : "text-orange-300" : "text-slate-300 hover:text-white"}`}
									>
										{item.label}

										<span
											className={`
						absolute
						bottom-[6px]
						left-0
						h-[2px]
						rounded-full
						transition-all
						duration-300

						${isActive
													? isNight
														? `
										w-full
										bg-indigo-400
										opacity-100
										shadow-[0_0_8px_rgba(129,140,248,0.55)]
									`
														: `
										w-full
										bg-orange-400
										opacity-100
										shadow-[0_0_8px_rgba(251,146,60,0.55)]
									`
													: `
									w-0
									opacity-0
									group-hover:w-full
								`
												}
					`}
										/>
									</Link>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default HeaderAntu;