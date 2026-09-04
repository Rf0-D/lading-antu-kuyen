import CommunitySearchSkeleton from "./CommunitySearchSkeleton";
import CommunityThreadCardSkeleton from "./CommunityThreadCardSkeleton";
import FeaturedCommunitiesSkeleton from "./FeatureCommunitiesSkeleton";
import AstronomicalCalendarSkeleton from "./AstronomicalCalendarSkeleton";
import PublicSessionSidebar from "@/app/(lading)/components/PublicSessionSidebar";


const CommunitiesSkeleton = () => {
	return (
		<div
			className="
				grid
				w-full
				grid-cols-1
				gap-6
				lg:grid-cols-[250px_minmax(0,1fr)_320px]
			"
		>
			<PublicSessionSidebar />

			<section className="min-w-0">
				<CommunitySearchSkeleton />

				<div className="mt-7 flex items-center justify-between">
					<div className="h-3 w-44 animate-pulse rounded bg-slate-700/70" />

					<div className="h-9 w-28 animate-pulse rounded-xl bg-orange-500/20" />
				</div>

				<div className="mt-6 space-y-6">
					<CommunityThreadCardSkeleton />

					<CommunityThreadCardSkeleton />

					<CommunityThreadCardSkeleton />
				</div>
			</section>

			<aside className="space-y-6">
				<FeaturedCommunitiesSkeleton />

				<AstronomicalCalendarSkeleton />
			</aside>
		</div>
	);
};

export default CommunitiesSkeleton;