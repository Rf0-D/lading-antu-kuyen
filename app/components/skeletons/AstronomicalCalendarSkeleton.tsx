const AstronomicalCalendarSkeleton = () => {
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
				<div className="h-3 w-44 rounded bg-slate-700/60" />
			</div>

			<div className="mt-5 space-y-6">
				{[1, 2, 3].map((item) => (
					<div
						key={item}
						className="space-y-2"
					>
						<div className="flex justify-between">
							<div className="h-2.5 w-[48%] rounded bg-slate-700/60" />

							<div className="h-2 w-[28%] rounded bg-orange-500/20" />
						</div>

						<div className="h-2 w-full rounded bg-slate-800" />

						<div className="h-2 w-[78%] rounded bg-slate-800" />
					</div>
				))}
			</div>
		</div>
	);
};

export default AstronomicalCalendarSkeleton;