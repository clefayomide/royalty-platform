import { AppButton } from "..";
import { ArrowRight, Logo } from "../../assets";
import { AuthNavMenuPropType } from "../../type";
import { classnames } from "../../utils";

export default function AuthNavigationMenu(
	props: Readonly<AuthNavMenuPropType>
) {
	const { text, onClick, className = "" } = props;
	return (
		<header
			className={classnames(
				`block md:absolute md:top-0 md:left-0 md:py-10 md:px-10 xl:px-0 minXl:static w-full h-[61px]`,
				className
			)}
		>
			<nav className="w-full h-full">
				<ul className="w-full h-full flex justify-between items-center minXl:justify-end ">
					<li className="block minXl:hidden">
						<Logo width="17.5" height="35" />
					</li>
					<li>
						<AppButton
							className="flex font-normal items-center gap-5 rounded-none !text-typography bg-transparent"
							onClick={onClick}
						>
							{text} <ArrowRight />
						</AppButton>
					</li>
				</ul>
			</nav>
		</header>
	);
}
