const DestinyDetailsSkeleton = () => {
	return (
		<div
			className="
				flex
				max-h-[calc(100dvh-120px)]
				w-full
				animate-pulse
				flex-col
				overflow-hidden
				rounded-2xl
				border
				border-slate-800/80
				bg-[#080d19]/95
			"
		>
			{/* IMAGE */}

			<div className="h-[190px] shrink-0 bg-slate-800/60" />

			{/* CONTENT */}

			<div className="flex-1 space-y-5 p-4">
				{/* Title */}

				<div className="space-y-3">
					<div className="flex justify-between gap-4">
						<div className="h-4 w-[65%] rounded bg-slate-700/70" />

						<div className="h-4 w-10 rounded bg-slate-800" />
					</div>

					<div className="h-2.5 w-[45%] rounded bg-slate-800" />
				</div>

				{/* Description */}

				<div className="space-y-2">
					<div className="h-2.5 w-full rounded bg-slate-800" />
					<div className="h-2.5 w-full rounded bg-slate-800" />
					<div className="h-2.5 w-[92%] rounded bg-slate-800" />
					<div className="h-2.5 w-[70%] rounded bg-slate-800" />
				</div>

				{/* Metrics */}

				<div
					className="
						grid
						grid-cols-3
						gap-4
						border-y
						border-slate-800
						py-4
					"
				>
					{[1, 2, 3].map(
						(item) => (
							<div
								key={item}
								className="space-y-2"
							>
								<div className="mx-auto h-4 w-4 rounded bg-slate-700" />
								<div className="mx-auto h-2 w-12 rounded bg-slate-800" />
							</div>
						),
					)}
				</div>

				{/* Label */}

				<div className="h-2 w-32 rounded bg-slate-800" />

				{/* AI BLOCK */}

				<div
					className="
						space-y-4
						rounded-xl
						border
						border-amber-500/10
						p-4
					"
				>
					<div className="h-2.5 w-[55%] rounded bg-amber-500/20" />

					<div className="space-y-2">
						<div className="h-2.5 w-full rounded bg-slate-800" />
						<div className="h-2.5 w-[85%] rounded bg-slate-800" />
					</div>

					<div className="h-px bg-slate-800" />

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<div className="h-2 w-10 rounded bg-emerald-500/20" />
							<div className="h-2 w-full rounded bg-slate-800" />
							<div className="h-2 w-[70%] rounded bg-slate-800" />
						</div>

						<div className="space-y-2">
							<div className="h-2 w-12 rounded bg-rose-500/20" />
							<div className="h-2 w-full rounded bg-slate-800" />
							<div className="h-2 w-[75%] rounded bg-slate-800" />
						</div>
					</div>
				</div>

				{/* Review */}

				<div className="space-y-3">
					<div className="h-2 w-28 rounded bg-slate-800" />

					<div
						className="
							h-[65px]
							rounded-xl
							bg-slate-900/50
						"
					/>
				</div>
			</div>

			{/* FOOTER */}

			<div
				className="
					grid
					grid-cols-2
					gap-3
					border-t
					border-slate-800
					p-4
				"
			>
				<div className="h-10 rounded-xl bg-slate-800" />

				<div className="h-10 rounded-xl bg-amber-500/30" />
			</div>
		</div>
	);
};

export default DestinyDetailsSkeleton;