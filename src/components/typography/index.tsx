import { TypographyPropType } from "../../type";
import { classnames } from "../../utils";

const Typography = (props: TypographyPropType) => {
	const { variant: Variant = "div", children, className = "", ...rest } = props;
	return (
		<Variant className={classnames("text-typography", className)} {...rest}>
			{children}
		</Variant>
	);
};

export default Typography;
