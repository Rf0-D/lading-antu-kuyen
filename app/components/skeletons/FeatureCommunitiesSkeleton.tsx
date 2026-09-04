const FeaturedCommunitiesSkeleton = () => {
	return (
		<div
			className="
				animate-pulse
				rounded-2xl
				border
				border-slate-800/70
				bg-[#060b19]/55
				p-5
			"
		>
			<div className="border-b border-slate-800/60 pb-4">
				<div className="h-3 w-40 rounded bg-slate-700/60" />
			</div>

			<div className="mt-4 space-y-3">
				{[1, 2, 3].map((item) => (
					<div
						key={item}
						className="
							h-[58px]
							rounded-xl
							bg-slate-800/50
						"
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturedCommunitiesSkeleton;