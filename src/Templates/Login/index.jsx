import { useContext, useEffect, useRef, useState } from "react";
import { Main } from "../../components/Main";
import { FormContainer, MessageFromRegister } from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { ModalMessageContext } from "../../contexts/ModalMessageContext";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export function Login() {
	const formRef = useRef();
	const { authenticated, handleLogin } = useContext(AuthenticationContext);
	const { state } = useLocation();
	const { modalState, modalDispatch } = useContext(ModalMessageContext);
	const [message, setMessage] = useState({ error: false, msg: "" });
	const navigate = useNavigate();

	useEffect(() => {
		if (authenticated) {
			navigate("/profile");
			return;
		}

		if (state) {
			sendMessageToModal(state.message);
		}

		return () => {
			modalDispatch({ type: "clear" });
		};

	}, []);

	function sendMessageToModal(message) {
		modalDispatch({ type: "send_message", message });

		function clearModal() {
			setInterval(() => {
				modalDispatch({ type: "clear" });
			}, 4000);
		}

		clearModal();
	}

	async function userSignIn(e) {
		e.preventDefault();
		const form = formRef.current;

		const email = form.email.value;
		const password = form.password.value;

		try {
			const response = await api.post("/login", { email, password });
			const userData = response.data;
			form.email.value = "";
			form.password.value = "";

			handleLogin(userData.userToken);
			setMessage({ error: false, msg: userData.msg });
			navigate("/");
		} catch (error) {
			const errorResponse = error.response.data;
			setMessage({ error: true, msg: errorResponse.msg });
		}
	}

	return (
		<Main>
			<FormContainer>
				<strong>Login</strong>
				<div className="image-box">
					<img src={Logo} alt="Logo, two music notes" />
				</div>
				<form ref={formRef} onSubmit={userSignIn}>
					<label>E-mail</label>
					<input placeholder="E-mail" type="email" name="email" />
					<label>Password</label>
					<input placeholder="Password" type="password" name="password" />
					<button>
						Login
					</button>
				</form>
				{message.error && <span className="form-message error">{message.msg}</span>}
				{!message.error && <span className="form-message success">{message.msg}</span>}
			</FormContainer>
			{modalState.message && (
				<MessageFromRegister>
					<>
						<div className="message-content">
							<AiFillCheckCircle className="message-icon" />
							<strong>{modalState.message}</strong>
						</div><div className="timer-bar" />
					</>
				</MessageFromRegister>
			)}
		</Main>
	);
}


