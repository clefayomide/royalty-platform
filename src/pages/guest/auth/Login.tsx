import { Link, useNavigate } from "react-router-dom";
import {
	AppAuthNavigationMenu,
	AppButton,
	AppForm,
	AppInput,
	AppTypography,
} from "../../../components";
import { paths } from "../../../route/path";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../validation-schema";
import { LoginFormType } from "../../../type";

export const Login = () => {
	const navigate = useNavigate();

	const {
		handleSubmit,
		formState: { isDirty, isValid },
		control,
	} = useForm<LoginFormType>({
		resolver: zodResolver(loginSchema),
		mode: "onChange",
	});

	const handleOpenSignup = () => {
		navigate(paths.signup);
	};

	const onSubmit: SubmitHandler<LoginFormType> = (data) => {
		console.log(data);
	};

	return (
		<div>
			<AppAuthNavigationMenu onClick={handleOpenSignup} text="Create account" />
			<AppTypography variant="h5" className="mt-5 text-[25px] font-medium">
				Login to Franchain
			</AppTypography>
			<AppForm
				onSubmit={handleSubmit(onSubmit)}
				className="flex mt-7 flex-col gap-6"
			>
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

				<AppTypography
					className="text-sm mt-0 text-typography leading-[18.23px] font-normal"
					variant="div"
				>
					Forgot your password? click{" "}
					<AppTypography variant="span" className="font-medium underline">
						<Link to={paths.resetPassword}>here</Link>
					</AppTypography>{" "}
					to reset
				</AppTypography>

				<AppButton
					type="button"
					disabled={!isDirty || !isValid}
					className="w-[131px] mt-3"
				>
					Sign up
				</AppButton>
			</AppForm>
		</div>
	);
};
