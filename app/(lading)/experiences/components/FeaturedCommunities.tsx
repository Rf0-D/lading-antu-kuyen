import {
	Users,
} from "lucide-react";

const communities = [
	{
		name: "Senderismo Ancestral ⛰️",
		members: "1.2k miembros",
		description:
			"Rutas andinas e hitos sagrados.",
	},
	{
		name: "Astrofotografía y Küyen 🌌",
		members: "850 miembros",
		description:
			"Captura cielos perfectos.",
	},
	{
		name: "Guardianes del Territorio 🦅",
		members: "2.4k miembros",
		description:
			"Turismo sustentable y cuidado natural.",
	},
];

const FeaturedCommunities = () => {
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
				<Users
					size={14}
					className="text-indigo-400"
				/>

				Comunidades destacadas
			</div>

			<div className="mt-4 space-y-3">
				{communities.map(
					(community) => (
						<div
							key={
								community.name
							}
							className="
								rounded-xl
								bg-slate-900/40
								p-3
							"
						>
							<div className="flex justify-between gap-2">
								<span className="text-xs font-bold text-white">
									{
										community.name
									}
								</span>

								<span className="shrink-0 font-mono text-[8px] text-slate-500">
									{
										community.members
									}
								</span>
							</div>

							<p className="mt-1 text-[10px] text-slate-500">
								{
									community.description
								}
							</p>
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default FeaturedCommunities;