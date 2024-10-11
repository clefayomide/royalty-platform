import { FormPropType } from "../../type";
import { classnames } from "../../utils";

const Form = (props: FormPropType) => {
	const { children, className = "", ...rest } = props;
	return (
		<form className={classnames("", className)} {...rest}>
			{children}
		</form>
	);
};

export default Form;
