interface PublicPageWrapperProps {
	children: React.ReactNode;
}

const PublicPageWrapper = ({
	children,
}: PublicPageWrapperProps) => {
	return (
		<main
			className="
				min-h-dvh
				w-full
				overflow-x-clip
				pt-[104px]
				pb-24

				md:pb-6

				xl:h-dvh
				xl:overflow-hidden
				xl:pb-0
			"
		>
			<div
				className="
					mx-auto
					w-full
					max-w-[1360px]
					px-4

					md:px-6
					lg:px-8
				"
			>
				{children}
			</div>
		</main>
	);
};

export default PublicPageWrapper;