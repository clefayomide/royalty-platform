import { forwardRef } from "react";
import { AppLabel, AppTypography } from "..";
import { InputPropType } from "../../type";
import { classnames } from "../../utils";

const Input = forwardRef(
	(props: InputPropType, ref: React.ForwardedRef<HTMLInputElement>) => {
		const {
			labelClassName = "",
			className = "",
			label,
			errorMessage,
			id,
			...rest
		} = props;
		return (
			<AppLabel
				htmlFor={id}
				className={classnames(
					"flex relative flex-col gap-[3px] font-medium",
					labelClassName
				)}
			>
				{label}
				<input
					ref={ref}
					id={id}
					className={classnames(
						"h-[46px] rounded-[10px] border outline-none focus:outline-none px-3",
						errorMessage ? "border-red-500" : "border-inputBorder",
						className
					)}
					{...rest}
				/>
				{errorMessage && (
					<AppTypography
						className="!text-red-500 absolute top-[68px] bottom-0"
						variant="small"
					>
						{errorMessage}
					</AppTypography>
				)}
			</AppLabel>
		);
	}
);

export default Input;
