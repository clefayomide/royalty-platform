import { LabelPropType } from "../../type";
import { classnames } from "../../utils";

const Label = (props: LabelPropType) => {
	const { children, className = "", ...rest } = props;
	return (
		<label
			className={classnames(
				"text-typography leading-[20.83px] text-base font-normal",
				className
			)}
			{...rest}
		>
			{children}
		</label>
	);
};

export default Label;
