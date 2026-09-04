const ExperiencePhaseSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div
        className="grid h-[48px] grid-cols-2 gap-2 rounded-xl bg-[#11182a] p-1"
      >
        <div className="rounded-lg bg-slate-800/70" />
        <div className="rounded-lg bg-slate-800/70" />
      </div>

      <div
        className="flex h-[46px] items-center border-b border-slate-800/70"
      >
        <div className="h-2.5 w-48 rounded bg-slate-800" />
      </div>
    </div>
  );
};

export default ExperiencePhaseSkeleton;