export const classnames = (...classes: string[]) => {
	let ret = "";

	const length = classes.length;

	for (let i = 0; i < length; i++) {
		if (classes[i]) {
			ret += classes[i] + " ";
		}
	}

	return ret.trimEnd();
};
