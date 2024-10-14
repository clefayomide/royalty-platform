import { AppAuthLayout, AppKycLayout } from "../layout";
import {
	AppKyc,
	AppLogin,
	AppResetPassword,
	AppResetPasswordSent,
	AppSignup,
} from "../pages";
import { RouteType } from "../type";
import { paths } from "./path";

const authRoutes: RouteType = [
	{
		title: "Sign Up",
		path: paths.signup,
		layout: AppAuthLayout,
		component: AppSignup,
	},
	{
		title: "Login",
		path: paths.login,
		layout: AppAuthLayout,
		component: AppLogin,
	},
	{
		title: "Reset Password",
		path: paths.resetPassword,
		layout: AppAuthLayout,
		component: AppResetPassword,
	},
	{
		title: "Reset Password Sent",
		path: paths.resetPasswordSent,
		layout: AppAuthLayout,
		component: AppResetPasswordSent,
	},
];

const kycRoutes: RouteType = [
	{ title: "KYC", path: paths.kyc, layout: AppKycLayout, component: AppKyc },
];

export const routes = [...authRoutes, ...kycRoutes];
