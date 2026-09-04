import CommunityThreadCard from "./CommunityThreadCard";

export interface CommunityThread {
	id: string;

	category: string;
	date: string;

	title: string;
	description: string;

	tags: string[];

	author: {
		name: string;
		role: string;
		avatar: string;
	};

	likes: number;
	replies: number;
}

interface CommunityThreadListProps {
	threads: CommunityThread[];
}

const CommunityThreadList = ({
	threads,
}: CommunityThreadListProps) => {
	if (threads.length === 0) {
		return (
			<div
				className="
					flex
					min-h-[200px]
					items-center
					justify-center
					rounded-2xl
					border
					border-dashed
					border-slate-800
					text-xs
					text-slate-500
				"
			>
				No encontramos hilos
				para esta búsqueda.
			</div>
		);
	}

	return (
		<div className="space-y-6">
			{threads.map(
				(thread) => (
					<CommunityThreadCard
						key={thread.id}
						thread={
							thread
						}
					/>
				),
			)}
		</div>
	);
};

export default CommunityThreadList;