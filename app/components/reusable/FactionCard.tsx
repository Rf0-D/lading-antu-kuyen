import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type Faction = "antu" | "kuyen";

export type FactionCardSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

interface FactionCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode;
  faction: Faction;
  size?: FactionCardSize;
}

const factionStyles: Record<
  Faction,
  {
    container: string;
    glow: string;
    topLine: string;
  }
> = {
  antu: {
    container: `
      border-orange-500/25
      bg-gradient-to-br
      from-orange-500/[0.08]
      via-slate-950/90
      to-slate-950/95
      shadow-[0_18px_60px_rgba(249,115,22,0.08)]
    `,
    glow: "bg-orange-500/10",
    topLine:
      "from-transparent via-orange-400/70 to-transparent",
  },

  kuyen: {
    container: `
      border-indigo-500/25
      bg-gradient-to-br
      from-indigo-500/[0.10]
      via-slate-950/90
      to-slate-950/95
      shadow-[0_18px_60px_rgba(99,102,241,0.10)]
    `,
    glow: "bg-indigo-500/10",
    topLine:
      "from-transparent via-indigo-400/70 to-transparent",
  },
};

const sizeStyles: Record<FactionCardSize, string> = {
  sm: "w-full max-w-sm p-3 sm:p-4",

  md: "w-full max-w-md p-4 sm:p-5",

  lg: "w-full max-w-2xl p-4 sm:p-5 lg:p-6",

  xl: "w-full max-w-4xl p-4 sm:p-5 lg:p-6",

  full: "w-full max-w-none p-4 sm:p-5 lg:p-6",
};

const FactionCard = ({
  children,
  faction,
  size = "md",
  className = "",
  ...props
}: FactionCardProps) => {
  const theme = factionStyles[faction];

  return (
    <div
      data-faction={faction}
      className={[
        `
          relative
          overflow-hidden
          rounded-2xl
          border
          backdrop-blur-xl
          transition-[border-color,box-shadow]
          duration-300
        `,
        theme.container,
        sizeStyles[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {/* Resplandor de la facción */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          size-48
          rounded-full
          blur-3xl
          ${theme.glow}
        `}
      />

      {/* Línea superior luminosa */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-x-8
          top-0
          h-px
          bg-linear-to-r
          ${theme.topLine}
        `}
      />

      {/* Contenido */}
      <div className="relative z-10 h-full min-w-0">
        {children}
      </div>
    </div>
  );
}


export default FactionCard