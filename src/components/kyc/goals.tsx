import { AppCard, AppCheckbox } from "..";
import hourGlass from "../../assets/hour-glass.svg";

const Goals = () => {
	return (
		<AppCard className="flex justify-between items-center">
			<img className="w-[78px] h-[78px] " src={hourGlass} alt="hour-glass" />
			<AppCheckbox
				labelClassName="font-bold text-xl"
				label={"Reduce failed payments"}
				outerContainerClassName="w-[70%]"
				inputContainerClassName="!flex-row gap-4"
				className="border-[0.82px] border-checkboxBorder h-[23.91px] w-[23.91px]"
			/>
		</AppCard>
	);
};

export default Goals;
