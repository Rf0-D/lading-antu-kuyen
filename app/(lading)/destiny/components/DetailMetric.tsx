import { DestinyPoi } from "./DestinyExplorer";

export const getCategoryLabel = (
	category: DestinyPoi["category"],
) => {
	switch (category) {
		case "nature":
			return "Naturaleza";

		case "gastronomy":
			return "Gastronomía";

		case "lodging":
			return "Hospedaje";

		case "point":
			return "Punto de interés";
	}
};

interface DetailMetricProps {
	icon: React.ReactNode;
	value: string;
}

export const DetailMetric = ({
	icon,
	value,
}: DetailMetricProps) => {
	return (
		<div
			className="
				flex
				flex-col
				items-center
				gap-1
				border-r
				border-slate-800/70
				px-1
				text-center
				last:border-r-0
			"
		>
			<span className="text-amber-400">
				{icon}
			</span>

			<span className="text-[9px] font-semibold text-slate-400">
				{value}
			</span>
		</div>
	);
};