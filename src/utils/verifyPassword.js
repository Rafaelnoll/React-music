import { isTheSame } from "./isTheSame";

export function verifyPassword(password, secondPassword) {
	if (password.length >= 6 && password.length <= 15 && isTheSame(password, secondPassword)) {
		return true;
	}

	return false;
}
