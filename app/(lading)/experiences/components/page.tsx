"use client";

import { useEffect, useState } from "react";
import PublicSessionSidebar from "../../components/PublicSessionSidebar";
import ExperiencePhaseSkeleton from "@/app/components/skeletons/ExperiencePhaseSkeleton";
import ExperiencePhaseSelector from "@/app/components/skeletons/ExperiencePhaseSelector";
import ExperienceCardSkeleton from "@/app/components/skeletons/ExperienceCardSkeleton";
import ExperienceCard, { ExperienceItem } from "./ExperienceCard";
import FeaturedCommunitiesSkeleton from "@/app/components/skeletons/FeatureCommunitiesSkeleton";
import FeaturedCommunities from "./FeaturedCommunities";
import AstronomicalCalendarSkeleton from "@/app/components/skeletons/AstronomicalCalendarSkeleton";
import AstronomicalCalendar from "./AstronomicalCalendar";
import { mockExperiences } from "@/type/static";


const ExperiencesSkeleton = () => {
	const [isLoading, setIsLoading] =
		useState(true);

	const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

	useEffect(() => {
		/*
		 * Temporal.
		 *
		 * Después esto será reemplazado por
		 * fetch / server action / React Query.
		 */
		const timeout = setTimeout(() => {
			setExperiences(mockExperiences);
			setIsLoading(false);
		}, 800);

		return () => clearTimeout(timeout);
	}, []);

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
			{/* Desktop XL only */}
			{/* ================================================= */}

			<div className="hidden min-w-0 xl:block">
				<PublicSessionSidebar />
			</div>

			{/* ================================================= */}
			{/* CENTER */}
			{/* ================================================= */}

			<section className="min-w-0">
				{/* ============================================= */}
				{/* PHASE SELECTOR */}
				{/* ============================================= */}

				<div
					className="
					w-full
					min-w-0
					overflow-x-auto

					[scrollbar-width:none]
					[&::-webkit-scrollbar]:hidden
				"
				>
					<div className="min-w-max sm:min-w-0">
						{isLoading ? (
							<ExperiencePhaseSkeleton />
						) : (
							<ExperiencePhaseSelector />
						)}
					</div>
				</div>

				{/* ============================================= */}
				{/* EXPERIENCE FEED */}
				{/* ============================================= */}

				<div
					className="
					mt-4
					min-w-0
					space-y-4

					sm:space-y-5

					xl:max-h-[calc(100dvh-230px)]
					xl:space-y-6
					xl:overflow-y-auto
					xl:pr-2

					xl:[scrollbar-width:thin]
					xl:[scrollbar-color:rgba(99,102,241,0.7)_transparent]

					xl:[&::-webkit-scrollbar]:w-[5px]
					xl:[&::-webkit-scrollbar-track]:bg-transparent
					xl:[&::-webkit-scrollbar-thumb]:rounded-full
					xl:[&::-webkit-scrollbar-thumb]:bg-indigo-500/70
				"
				>
					{isLoading ? (
						<>
							<ExperienceCardSkeleton />
							<ExperienceCardSkeleton />
						</>
					) : (
						experiences.map((experience) => (
							<ExperienceCard
								key={experience.id}
								experience={experience}
							/>
						))
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

export default ExperiencesSkeleton;