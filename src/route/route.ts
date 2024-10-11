import { AppAuthLayout } from "../layout";
import { AppSignup } from "../pages";
import { RouteType } from "../type";
import { paths } from "./path";

const authRoutes: RouteType = [
	{
		title: "Sign Up",
		path: paths.signup,
		layout: AppAuthLayout,
		component: AppSignup,
	},
];

export const routes = [...authRoutes];
