import { CardType } from "../../type";
import { classnames } from "../../utils";

const Card = (props: CardType) => {
	const { className = "", children } = props;
	return (
		<div
			className={classnames(
				"w-full md:w-[320px] xl:w-[383px] rounded-[15px] p-5 h-[182px] border bg-white border-cardBorderInactive",
				className
			)}
		>
			{children}
		</div>
	);
};

export default Card;
