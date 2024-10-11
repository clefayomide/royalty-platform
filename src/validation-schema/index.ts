import * as z from "zod";
import { validationMessages } from "../constants";

export const signupSchema = z.object({
	firstName: z
		.string({ message: validationMessages.reqFields.firstName })
		.max(validationMessages.minMax.firstName.max, {
			message: validationMessages.valMsg.firstName,
		}),
	lastName: z
		.string({ message: validationMessages.reqFields.lastName })
		.max(validationMessages.minMax.lastName.max, {
			message: validationMessages.valMsg.lastName,
		}),
	workEmail: z
		.string({ message: "work " + validationMessages.reqFields.email })
		.email({ message: validationMessages.valMsg.email }),
	businessEmail: z
		.string({ message: "business " + validationMessages.reqFields.email })
		.email({ message: validationMessages.valMsg.email }),
	password: z
		.string({ message: validationMessages.reqFields.password })
		.min(validationMessages.minMax.password.min, {
			message: validationMessages.valMsg.password,
		})
		.max(validationMessages.minMax.password.max, {
			message: validationMessages.valMsg.password,
		}),
});

export const loginSchema = z.object({
	email: z
		.string({ message: validationMessages.reqFields.email })
		.email({ message: validationMessages.valMsg.email }),
	password: z.string({ message: validationMessages.reqFields.password }),
});
