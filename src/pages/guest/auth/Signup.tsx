import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
	AppAuthNavigationMenu,
	AppButton,
	AppForm,
	AppInput,
	AppTypography,
} from "../../../components";
import { signupSchema } from "../../../validation-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../route/path";

type FormType = z.infer<typeof signupSchema>;

export const Signup = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		formState: { isDirty, isValid },
		control,
	} = useForm<FormType>({
		resolver: zodResolver(signupSchema),
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<FormType> = (data) => {
		console.log(data);
	};

	const handleOpenLogin = () => {
		console.log("clcied");
		navigate(paths.login);
	};
	return (
		<div className="">
			<AppAuthNavigationMenu onClick={handleOpenLogin} text="Login" />
			<AppTypography variant="h5" className="mt-5 text-[25px] font-medium">
				Get started with Franchain
			</AppTypography>
			<AppTypography variant="h6" className="text-[20px] font-normal">
				Create an account in 1 minute
			</AppTypography>
			<AppForm
				onSubmit={handleSubmit(onSubmit)}
				className="flex mt-7 flex-col gap-6"
			>
				<Controller
					name="firstName"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<AppInput
								{...field}
								type="text"
								id="firstName"
								label="First name"
								errorMessage={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					name="lastName"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<AppInput
								{...field}
								id="lastName"
								type="text"
								label="Last name"
								errorMessage={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					name="businessEmail"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<AppInput
								{...field}
								id="businessEmail"
								type="email"
								label="Business name"
								errorMessage={fieldState.error?.message}
							/>
						);
					}}
				/>
				<Controller
					name="workEmail"
					control={control}
					render={({ field, fieldState }) => {
						return (
							<AppInput
								{...field}
								id="workEmail"
								type="email"
								label="Work email"
								errorMessage={fieldState.error?.message}
							/>
						);
					}}
				/>

				<Controller
					control={control}
					name="password"
					render={({ field, fieldState }) => {
						return (
							<AppInput
								{...field}
								id="password"
								type="password"
								label="Password"
								errorMessage={fieldState.error?.message}
							/>
						);
					}}
				/>
				<AppButton
					type="submit"
					disabled={!isDirty || !isValid}
					className="w-[144px] mt-3"
				>
					Sign up
				</AppButton>
				<AppTypography
					className="text-sm text-typography leading-[18.23px] font-normal"
					variant="small"
				>
					By clicking “Sign up“, I agree to Franchain's Terms of Use, Privacy
					Policy and to receive electronic communication about my accounts and
					services per Franchain's Electronic Communications Agreement, and
					acknowledge receipt of Franchain's USA PATRIOT Act disclosure.
				</AppTypography>
			</AppForm>
		</div>
	);
};
