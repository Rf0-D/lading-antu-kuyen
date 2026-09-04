interface FilterButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const FilterButton = ({ children, active, onClick }: FilterButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
				flex
				h-8
				items-center
				gap-2
				rounded-lg
				px-3
				text-xs
				font-semibold
				transition-all

				${active
          ? `
							border
							border-indigo-500/50
							bg-indigo-500/10
							text-indigo-300
						`
          : `
							border
							border-transparent
							text-slate-500
							hover:text-slate-200
						`
        }
			`}
    >
      {children}
    </button>
  );
};

interface LegendProps {
  label: string;
  className: string;
}

export const Legend = ({
  label,
  className,
}: LegendProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className={`h-1.5 w-1.5 rounded-full ${className}`}
      />

      <span>{label}</span>
    </div>
  );
};