import { AppAuthNavigationMenu, AppTypography } from "../../../components";
import { paths } from "../../../route/path";
import { useNavigate } from "react-router-dom";

export function ResetPasswordSent() {
	const navigate = useNavigate();

	const handleReturnToLogin = () => {
		navigate(paths.login);
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
				Check your email
			</AppTypography>
			<AppTypography variant="p" className="leading-[28.64px] mt-2">
				Thanks! If <AppTypography variant="span" className="font-semibold">v@gmail.com</AppTypography> matches an email address we have on our record,
				then we've sent you an email containing further instructions for
				resetting your password.
			</AppTypography>

			<AppTypography variant="p" className="leading-[28.64px] mt-5">
				If you haven't received an email in 5 minutes, check your spam folder.{" "}
				<AppTypography variant="span" className="text-[#7D97FF]">
					Resend
				</AppTypography>{" "}
				or{" "}
				<AppTypography variant="span" className="text-[#7D97FF]">
					try a different email address
				</AppTypography>
				.
			</AppTypography>
		</div>
	);
}
