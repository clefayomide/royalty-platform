import { AppAuthNavigationMenu } from "../../components";

export const KycLayout = ({ children }: { children: React.ReactNode }) => {
	const handleSkipToDashboard = () => {};

	return (
		<div className="px-5 md:px-8 pt-2 pb-5 ">
			<header>
				<nav className="flex justify-between items-center">
					<AppAuthNavigationMenu
						showLogo={true}
						onClick={handleSkipToDashboard}
						text="Skip to dashboard"
					/>
				</nav>
			</header>
			<main>{children}</main>
		</div>
	);
};
