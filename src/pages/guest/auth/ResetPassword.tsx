import {
	AppAuthNavigationMenu,
	AppButton,
	AppForm,
	AppInput,
	AppTypography,
} from "../../../components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "../../../validation-schema";
import { ResetPasswordFormType } from "../../../type";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../route/path";

export const ResetPassword = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		formState: { isDirty, isValid },
		control,
	} = useForm<ResetPasswordFormType>({
		resolver: zodResolver(resetPasswordSchema),
		mode: "onChange",
	});

	const handleReturnToLogin = () => {
		navigate(paths.login);
	};

	const onSubmit: SubmitHandler<ResetPasswordFormType> = () => {
		navigate(paths.resetPasswordSent);
	};
	return (
		<div>
			<AppAuthNavigationMenu
				onClick={handleReturnToLogin}
				text="Return to login"
			/>
			<AppTypography
				variant="h5"
				className="mt-10 md:mt-5 text-[25px] font-medium"
			>
				Reset password
			</AppTypography>
			<AppTypography className="leading-[28.64px]" variant="p">
				Enter your email address to get instructions for resetting your
				password.
			</AppTypography>
			<AppForm onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<AppInput
								{...field}
								id="email"
								type="email"
								label="Email Address"
								errorMessage={fieldState.error?.message}
							/>
						);
					}}
				/>
				<AppButton
					type="submit"
					disabled={!isDirty || !isValid}
					className="w-[218px] mt-3"
				>
					Reset password
				</AppButton>
			</AppForm>
		</div>
	);
};
