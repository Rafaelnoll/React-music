import { Main } from "../../components/Main";
import { FormContainer } from "./styles";
import Logo from "../../assets/imgs/logo.svg";

export function Login() {
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

		</Main>
	);
}


