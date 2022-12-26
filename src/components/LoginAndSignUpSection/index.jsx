import { Link } from "react-router-dom";
import { LoginAndSignupContainer } from "./styles";
import P from "prop-types";

export function LoginAndSignUpSection({ title }) {
	return (
		<LoginAndSignupContainer>
			<strong>{title}</strong>
			<div className="buttons-container">
				<Link to="/login">
					<button className="login">Login</button>
				</Link>
				<span> or</span>
				<Link to="/register">
					<button className="register">Signup</button>
				</Link>
			</div>
		</LoginAndSignupContainer>
	);
}

LoginAndSignUpSection.propTypes = {
	title: P.string.isRequired,
};
