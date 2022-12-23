import { useRef } from "react";
import { Main } from "../../components/Main";
import { FormContainer } from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import { verifyPassword } from "../../utils/verifyPassword";
import { validateEmail } from "../../utils/validateEmail";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export function Register() {
	const formRef = useRef();
	const navigate = useNavigate();

	function clearForm() {
		const form = formRef.current;

		form.email.value = "";
		form.password.value = "";
		form.repeated_password.value = "";
	}

	async function onSubmit(e) {
		e.preventDefault();

		const form = formRef.current;
		const email = form.email.value;
		const password = form.password.value;
		const repeatedPassword = form.repeated_password.value;

		const passwordIsCorrect = verifyPassword(password, repeatedPassword);
		const emailIsCorrect = validateEmail(email);

		if (emailIsCorrect && passwordIsCorrect) {
			await api.post("/user", {
				email,
				password,
				repeatedPassword,
			});
			clearForm();
			navigate("/login");
			return;
		}

		return;
	}

	return (
		<Main>
			<FormContainer>
				<strong>Register</strong>
				<div className="image-box">
					<img src={Logo} alt="Logo, two music notes" />
				</div>
				<form onSubmit={onSubmit} ref={formRef}>
					<label>E-mail</label>
					<input placeholder="E-mail" type="email" name="email" />
					<label>Password</label>
					<input placeholder="Password" type="password" name="password" />
					<label>Repeat password</label>
					<input placeholder="Password (repeat)" type="password" name="repeated_password" />
					<button>
						Register
					</button>
				</form>
			</FormContainer>

		</Main>
	);
}
