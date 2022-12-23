import { useRef, useState } from "react";
import { Main } from "../../components/Main";
import { FormContainer } from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import { verifyPassword } from "../../utils/verifyPassword";
import { validateEmail } from "../../utils/validateEmail";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { isTheSame } from "../../utils/isTheSame";

export function Register() {
	const [message, setMessage] = useState({ error: false, msg: "" });
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

		if (email === "") {
			setMessage({ error: true, msg: "Email field cannot be empty" });
			return;
		}

		if (!emailIsCorrect) {
			setMessage({ error: true, msg: "Email is not correct" });
			return;
		}

		if (password === "") {
			setMessage({ error: true, msg: "Pasword field cannot be empty" });
			return;
		}

		if (!isTheSame(password, repeatedPassword)) {
			setMessage({ error: true, msg: "Passwords must be the same" });
			return;
		}

		if (!passwordIsCorrect) {
			setMessage({ error: true, msg: "Password must have a minimum of 6 and a maximum of 15 characters" });
			return;
		}


		if (emailIsCorrect && passwordIsCorrect) {
			try {
				const response = await api.post("/user", {
					email,
					password,
					repeatedPassword,
				});

				clearForm();
				setMessage({ error: false, msg: response.data.msg });
				navigate("/login");
				return;
			} catch (error) {
				const errorResponse = error.response.data;
				if (errorResponse.error) {
					setMessage({ error: true, msg: errorResponse.msg });
				}
			}
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
				{message.error && <span className="form-message error">{message.msg}</span>}
				{!message.error && <span className="form-message success">{message.msg}</span>}
			</FormContainer>

		</Main>
	);
}
