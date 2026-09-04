"use client";

import { useEffect, useMemo, useState } from "react";


import { useAntuTheme } from "@/providers/ThemeProvider";
import PublicSessionSidebar from "../../components/PublicSessionSidebar";
import CommunitySearchSkeleton from "@/app/components/skeletons/CommunitySearchSkeleton";
import CommunityThreadCardSkeleton from "@/app/components/skeletons/CommunityThreadCardSkeleton";
import FeaturedCommunitiesSkeleton from "@/app/components/skeletons/FeatureCommunitiesSkeleton";
import FeaturedCommunities from "../../experiences/components/FeaturedCommunities";
import AstronomicalCalendarSkeleton from "@/app/components/skeletons/AstronomicalCalendarSkeleton";
import AstronomicalCalendar from "../../experiences/components/AstronomicalCalendar";
import CommunityThreadList, { CommunityThread } from "./CommunityTheadList";
import CommunitySearch from "./CommunitySearch";
import { MOCK_THREADS } from "@/type/static";


const CommunitiesExplorer = () => {
	const [isLoading, setIsLoading] =
		useState(true);

	const [threads, setThreads] = useState<CommunityThread[]>([]);

	const [search, setSearch] =
		useState("");

	const { phaseMode } =
		useAntuTheme();

	const isNight =
		phaseMode === "night";

	useEffect(() => {
		/*
		 * Temporal para probar Skeleton.
		 * Después esto será el request real.
		 */
		const timeout =
			setTimeout(() => {
				setThreads(
					MOCK_THREADS,
				);

				setIsLoading(false);
			}, 800);

		return () =>
			clearTimeout(timeout);
	}, []);

	const filteredThreads =
		useMemo(() => {
			const normalized =
				search
					.trim()
					.toLowerCase();

			if (!normalized) {
				return threads;
			}

			return threads.filter(
				(thread) =>
					thread.title
						.toLowerCase()
						.includes(
							normalized,
						) ||
					thread.description
						.toLowerCase()
						.includes(
							normalized,
						) ||
					thread.tags.some(
						(tag) =>
							tag
								.toLowerCase()
								.includes(
									normalized,
								),
					),
			);
		}, [
			search,
			threads,
		]);

return (
	<div
		className="
			grid
			w-full
			min-w-0
			grid-cols-1
			gap-4

			sm:gap-5

			xl:grid-cols-[250px_minmax(0,1fr)_320px]
			xl:gap-6
		"
	>
		{/* ================================================= */}
		{/* LEFT SIDEBAR */}
		{/* ================================================= */}

		<div className="hidden min-w-0 xl:block">
			<PublicSessionSidebar />
		</div>

		{/* ================================================= */}
		{/* CENTER */}
		{/* ================================================= */}

		<section className="min-w-0">
			{/* ============================================= */}
			{/* SEARCH */}
			{/* Desktop / Tablet only */}
			{/* Mobile usará el buscador global */}
			{/* ============================================= */}

			<div className="hidden min-w-0 md:block">
				{isLoading ? (
					<CommunitySearchSkeleton />
				) : (
					<CommunitySearch
						value={search}
						onChange={setSearch}
					/>
				)}
			</div>

			{/* ============================================= */}
			{/* HEADER */}
			{/* ============================================= */}

			<div
				className="
					flex
					min-w-0
					items-center
					justify-between
					gap-3

					sm:gap-4

					md:mt-7
				"
			>
				<h2
					className="
						min-w-0
						flex-1
						font-mono
						text-[11px]
						font-bold
						uppercase
						tracking-[0.04em]
						text-white

						sm:text-xs
						md:text-sm
					"
				>
					Comunidades activas (
					{isLoading
						? "..."
						: filteredThreads.length}
					)
				</h2>

				<button
					type="button"
					className={`
						flex
						h-9
						shrink-0
						items-center
						justify-center
						gap-1.5
						rounded-xl
						px-3
						text-[10px]
						font-bold
						text-white
						transition-all
						active:scale-[0.98]

						sm:gap-2
						sm:px-4
						sm:text-xs

						${isNight
							? `
								bg-indigo-600
								hover:bg-indigo-500
							`
							: `
								bg-orange-600
								hover:bg-orange-500
							`
						}
					`}
				>
					<span className="text-base leading-none sm:text-lg">
						+
					</span>

					<span className="hidden min-[360px]:inline">
						Nuevo Hilo
					</span>

					<span className="min-[360px]:hidden">
						Nuevo
					</span>
				</button>
			</div>

			{/* ============================================= */}
			{/* THREADS */}
			{/* ============================================= */}

			<div
				className={`
					mt-4
					min-w-0
					space-y-4

					sm:mt-5
					sm:space-y-5

					xl:mt-6
					xl:max-h-[calc(100dvh-220px)]
					xl:space-y-6
					xl:overflow-y-auto
					xl:pr-2

					xl:[scrollbar-width:thin]
					xl:[&::-webkit-scrollbar]:w-[5px]
					xl:[&::-webkit-scrollbar-track]:bg-transparent
					xl:[&::-webkit-scrollbar-thumb]:rounded-full

					${isNight
						? `
							xl:[scrollbar-color:rgba(99,102,241,0.75)_transparent]
							xl:[&::-webkit-scrollbar-thumb]:bg-indigo-500/70
						`
						: `
							xl:[scrollbar-color:rgba(249,115,22,0.75)_transparent]
							xl:[&::-webkit-scrollbar-thumb]:bg-orange-500/70
						`
					}
				`}
			>
				{isLoading ? (
					<>
						<CommunityThreadCardSkeleton />
						<CommunityThreadCardSkeleton />
						<CommunityThreadCardSkeleton />
					</>
				) : (
					<CommunityThreadList
						threads={filteredThreads}
					/>
				)}
			</div>
		</section>

		{/* ================================================= */}
		{/* RIGHT CONTENT */}
		{/* ================================================= */}

		<aside
			className="
				grid
				min-w-0
				grid-cols-1
				gap-4

				sm:gap-5

				md:grid-cols-2

				xl:grid-cols-1
				xl:content-start
				xl:gap-6
			"
		>
			<div className="min-w-0">
				{isLoading ? (
					<FeaturedCommunitiesSkeleton />
				) : (
					<FeaturedCommunities />
				)}
			</div>

			<div className="min-w-0">
				{isLoading ? (
					<AstronomicalCalendarSkeleton />
				) : (
					<AstronomicalCalendar />
				)}
			</div>
		</aside>
	</div>
);
};

export default CommunitiesExplorer;