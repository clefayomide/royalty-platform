import { AppSnapshot, Logo } from "../../assets";
import { AppTypography } from "../../components";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-appBackground md:flex md:justify-center md:items-center xl:justify-between w-screen  h-screen overflow-hidden">
			<section className="h-full md:h-auto minXl:h-full w-full md:w-[70%] xl:w-[35%] p-4 md:p-8 overflow-y-scroll md:overflow-auto minXl:overflow-y-scroll">
				{children}
			</section>
			<section className="hidden minXl:block relative py-5 px-10 h-full w-[65%] bg-authCustomGradient">
				<header className="absolute bottom-10 right-10">
					<Logo />
				</header>
				<div className="h-full flex justify-center items-center flex-col">
					<AppSnapshot />
					<AppTypography
						variant="h5"
						className="mt-5 text-center text-[40px] leading-[50.8px] font-medium"
					>
						Royalty collections, <br /> simplified. It’s next level!
					</AppTypography>
					<AppTypography
						variant="h6"
						className="mt-2 text-center leading-7 text-[22px]"
					>
						Revenue based invoice collection to <br /> make royalty collection
						as easy as...
					</AppTypography>
				</div>
			</section>
		</div>
	);
};
