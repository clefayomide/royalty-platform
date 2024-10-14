import { AppButton, AppForm, AppKycGoal, AppTypography } from "../../../components";

export const Kyc = () => {
	return (
		<div>
			<section className="h-[198px] flex flex-col justify-center">
				<AppTypography
					variant="h5"
					className="text-center text-typography mt-12 md:mt-32 minXl:mt-0 text-3xl leading-[39.06px] font-medium"
				>
					What’s your goal with Franchain?
				</AppTypography>
				<AppTypography
					variant="h6"
					className="text-center text-[22px] mt-2 text-typography font-normal leading-[28.64px]"
				>
					No wrong answers here. And it doesn’t matter if you change your mind
					later.
				</AppTypography>
			</section>
			<AppForm className="w-full">
				<div className="w-full grid md:grid-rows-3 justify-center md:grid-flow-col gap-8 mt-20 md:mt-24 minXl:mt-5">
					<AppKycGoal />
					<AppKycGoal />
					<AppKycGoal />
					<AppKycGoal />
					<AppKycGoal />
					<AppKycGoal />
				</div>
				<AppButton className="w-[161px] !mt-8 md:m-auto">Continue</AppButton>
			</AppForm>
		</div>
	);
};
