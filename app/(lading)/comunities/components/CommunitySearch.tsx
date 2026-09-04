"use client";

import {
	Search,
} from "lucide-react";

interface CommunitySearchProps {
	value: string;
	onChange: (
		value: string,
	) => void;
}

const CommunitySearch = ({
	value,
	onChange,
}: CommunitySearchProps) => {
	return (
		<div
			className="
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
					border-slate-700/70
					bg-[#0c1424]/70
					px-4
				"
			>
				<Search
					size={17}
					className="shrink-0 text-slate-500"
				/>

				<input
					value={value}
					onChange={(event) =>
						onChange(
							event.target
								.value,
						)
					}
					placeholder="Buscar comunidades, temas, hilos o etiquetas..."
					className="
						min-w-0
						flex-1
						bg-transparent
						text-xs
						text-slate-200
						outline-none
						placeholder:text-slate-500
					"
				/>
			</div>
		</div>
	);
};

export default CommunitySearch;