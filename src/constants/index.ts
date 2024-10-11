export const validationMessages = {
	reqFields: {
		firstName: "first name is required",
		lastName: "last name is required",
		email: "email is required",
		password: "password is required",
	},
	valMsg: {
		firstName: "first name is too long",
		lastName: "last name is too long",
		email: "please provide a valid email address",
		password:
			"password should be a minimum of 8 characters and a maximum of 16 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
	},
	minMax: {
		firstName: {
			max: 15,
		},
		lastName: {
			max: 15,
		},
		password: {
			min: 8,
			max: 16,
		},
	},
};
