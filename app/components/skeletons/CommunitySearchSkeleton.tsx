const CommunitySearchSkeleton = () => {
	return (
		<div
			className="
				animate-pulse
				rounded-2xl
				border
				border-slate-800/70
				bg-[#060b19]/55
				p-4
			"
		>
			<div
				className="
					flex
					h-[42px]
					items-center
					gap-3
					rounded-xl
					border
					border-slate-800
					bg-[#0c1424]/70
					px-4
				"
			>
				<div className="h-4 w-4 rounded-full bg-slate-700" />

				<div className="h-2.5 w-[65%] rounded bg-slate-800" />
			</div>
		</div>
	);
};

export default CommunitySearchSkeleton;