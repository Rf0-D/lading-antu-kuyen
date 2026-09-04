const ExperienceCardSkeleton = () => {
	return (
		<div
			className="
				animate-pulse
				overflow-hidden
				rounded-2xl
				border
				border-slate-800/70
				bg-[#050a17]/70
			"
		>
			{/* HEADER */}

			<div
				className="
					flex
					h-[74px]
					items-center
					justify-between
					px-5
				"
			>
				<div className="flex items-center gap-3">
					<div className="h-10 w-10 rounded-full bg-slate-800" />

					<div className="space-y-2">
						<div className="h-3 w-28 rounded bg-slate-700/60" />

						<div className="h-2.5 w-20 rounded bg-slate-800" />
					</div>
				</div>

				<div className="h-8 w-24 rounded-xl bg-slate-800" />
			</div>

			{/* IMAGE */}

			<div className="h-[320px] bg-slate-800/50" />

			{/* CONTENT */}

			<div className="space-y-5 p-5">
				<div className="h-3 w-44 rounded bg-slate-700/60" />

				<div className="space-y-2">
					<div className="h-3 w-full rounded bg-slate-800" />
					<div className="h-3 w-full rounded bg-slate-800" />
					<div className="h-3 w-[92%] rounded bg-slate-800" />
					<div className="h-3 w-[74%] rounded bg-slate-800" />
				</div>

				{/* TAGS */}

				<div className="flex gap-2">
					<div className="h-7 w-20 rounded bg-slate-800" />
					<div className="h-7 w-24 rounded bg-slate-800" />
					<div className="h-7 w-20 rounded bg-slate-800" />
					<div className="h-7 w-16 rounded bg-slate-800" />
				</div>

				<div className="h-px bg-slate-800" />

				<div className="flex justify-between">
					<div className="flex gap-4">
						<div className="h-5 w-12 rounded bg-slate-800" />
						<div className="h-5 w-12 rounded bg-slate-800" />
					</div>

					<div className="h-9 w-48 rounded-xl bg-orange-500/20" />
				</div>
			</div>
		</div>
	);
};

export default ExperienceCardSkeleton;