export type RouteType = {
	title: string;
	path: string;
	layout: ({ children }: { children: React.ReactNode }) => JSX.Element;
	component: () => JSX.Element;
}[];

type TypographyVariantType = keyof JSX.IntrinsicElements;

export type TypographyPropType = {
	variant?: TypographyVariantType;
	children: React.ReactNode;
	className?: string;
};

export type InputPropType = {
	labelClassName?: string;
	label: string;
	errorMessage?: string;
} & JSX.IntrinsicElements["input"];

export type LabelPropType = JSX.IntrinsicElements["label"];
export type FormPropType = JSX.IntrinsicElements["form"];
export type ButtonPropType = JSX.IntrinsicElements["button"];

export type SVGPropType = {
	width?: string;
	height?: string;
};

export type AuthNavMenuPropType = {
	text: string;
	onClick: () => void;
	className?: string;
};
