import { CheckboxType } from "../../type";
import { AppLabel, AppTypography } from "..";
import { classnames } from "../../utils";

const checkbox = (props: CheckboxType) => {
	const {
		label,
		labelClassName = "",
		className = "",
		errorMessage,
		id,
		outerContainerClassName = "",
		inputContainerClassName = "",
		...rest
	} = props;
	return (
		<div className={classnames("relative  w-fit", outerContainerClassName)}>
			<div
				className={classnames(
					"flex flex-row-reverse gap-2",
					inputContainerClassName
				)}
			>
				<AppLabel htmlFor={id} className={classnames("", labelClassName)}>
					{label}
				</AppLabel>

				<input
					id={id}
					type="checkbox"
					className={classnames("", className)}
					{...rest}
				/>
			</div>
			{errorMessage && (
				<AppTypography
					className="!text-red-500 left-0 absolute top-5 "
					variant="small"
				>
					{errorMessage}
				</AppTypography>
			)}
		</div>
	);
};

export default checkbox;
