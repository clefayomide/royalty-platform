import { AppAuthLayout } from "../layout";
import { AppLogin, AppSignup } from "../pages";
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
];

export const routes = [...authRoutes];
