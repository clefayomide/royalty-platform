import { ButtonPropType } from "../../type";
import { classnames } from "../../utils";

const Button = (props: ButtonPropType) => {
	const { className = "", children, disabled, ...rest } = props;
	return (
		<button
			className={classnames(
				"text-white font-bold text-lg h-[43px] rounded-[60px] font-dmSans",
				disabled ? "bg-disabled" : "bg-primary",
				className
			)}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
