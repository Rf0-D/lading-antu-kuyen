import { Sparkles } from "lucide-react";

const events = [
	{
		title: "We Tripantu ☀️",
		date: "SOLSTICIO DE INVIERNO",
		description:
			"Celebración del año nuevo Mapuche y renovación natural.",
	},
	{
		title: "Eclipse Lunar (Küyen Ligh) 🌙",
		date: "25 DE NOVIEMBRE",
		description:
			"Avistamiento del 95% de visibilidad en La Araucanía.",
	},
	{
		title: "Lluvia de Gemínidas ✨",
		date: "14 DE DICIEMBRE",
		description:
			"Avistamiento ideal en el cielo estrellado de Atacama.",
	},
];

const AstronomicalCalendar = () => {
	return (
		<div
			className="
				rounded-2xl
				border
				border-slate-800/70
				bg-[#060b19]/55
				p-5
				backdrop-blur-sm
			"
		>
			<div
				className="
					flex
					items-center
					gap-2
					border-b
					border-slate-800/60
					pb-4
					font-mono
					text-[10px]
					font-bold
					uppercase
					tracking-wider
					text-slate-300
				"
			>
				<Sparkles
					size={14}
					className="text-orange-400"
				/>

				Calendario astronómico
			</div>

			<div className="mt-5 space-y-6">
				{events.map((event) => (
					<div key={event.title}>
						<div className="flex justify-between gap-3">
							<span className="text-[11px] font-bold text-white">
								{event.title}
							</span>

							<span className="shrink-0 font-mono text-[8px] font-bold text-orange-500">
								{event.date}
							</span>
						</div>

						<p className="mt-2 text-[10px] leading-4 text-slate-500">
							{
								event.description
							}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AstronomicalCalendar;