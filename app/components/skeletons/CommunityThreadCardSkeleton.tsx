const CommunityThreadCardSkeleton = () => {
	return (
		<article
			className="
				animate-pulse
				rounded-2xl
				border
				border-slate-800/70
				bg-[#050a17]/70
				p-5
			"
		>
			{/* CATEGORY / DATE */}

			<div className="flex justify-between">
				<div className="h-6 w-24 rounded-full bg-amber-500/10" />

				<div className="h-2.5 w-20 rounded bg-slate-800" />
			</div>

			{/* TITLE */}

			<div className="mt-4 h-4 w-[82%] rounded bg-slate-700/70" />

			{/* DESCRIPTION */}

			<div className="mt-3 space-y-2">
				<div className="h-2.5 w-full rounded bg-slate-800" />

				<div className="h-2.5 w-[92%] rounded bg-slate-800" />
			</div>

			{/* TAGS */}

			<div className="mt-4 flex gap-2">
				<div className="h-6 w-20 rounded bg-slate-800" />
				<div className="h-6 w-20 rounded bg-slate-800" />
				<div className="h-6 w-20 rounded bg-slate-800" />
			</div>

			<div className="my-4 h-px bg-slate-800" />

			{/* FOOTER */}

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<div className="h-7 w-7 rounded-full bg-slate-800" />

					<div className="h-2.5 w-24 rounded bg-slate-700" />

					<div className="h-5 w-20 rounded bg-slate-800" />
				</div>

				<div className="flex gap-3">
					<div className="h-4 w-10 rounded bg-slate-800" />

					<div className="h-4 w-20 rounded bg-slate-800" />
				</div>
			</div>
		</article>
	);
};

export default CommunityThreadCardSkeleton;