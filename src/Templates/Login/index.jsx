import { useContext, useEffect } from "react";
import { Main } from "../../components/Main";
import { FormContainer, MessageFromRegister } from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { ModalMessageContext } from "../../contexts/ModalMessageContext";

export function Login() {
	const { state } = useLocation();
	const { modalState, modalDispatch } = useContext(ModalMessageContext);

	useEffect(() => {
		if (state) {
			modalDispatch({ type: "send_message", message: state.message });
		}

		function clearModal() {
			setInterval(() => {
				modalDispatch({ type: "clear" });
			}, 4000);
		}

		clearModal();

		return () => {
			modalDispatch({ type: "clear" });
		};

	}, []);

	return (
		<Main>
			<FormContainer>
				<strong>Login</strong>
				<div className="image-box">
					<img src={Logo} alt="Logo, two music notes" />
				</div>
				<form>
					<label>E-mail</label>
					<input placeholder="E-mail" type="email" />
					<label>Password</label>
					<input placeholder="Password" type="password" />
					<button>
						Login
					</button>
				</form>
			</FormContainer>
			{modalState.message && (
				<MessageFromRegister>
					<div className="message-content">
						<AiFillCheckCircle className="message-icon" />
						<strong>{modalState.message}</strong>
					</div>
					<div className="timer-bar" />
				</MessageFromRegister>
			)}
		</Main>
	);
}


