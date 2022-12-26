import { useEffect } from "react";
import { Main } from "../../components/Main";
import api from "../../api";
import { useState } from "react";
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { LoginAndSignupContainer, UserInfosContainer } from "./styles";
import { Link } from "react-router-dom";

export function ProfilePage() {
	const [user, setUser] = useState({});
	const { authenticated, loading, handleLogout } = useContext(AuthenticationContext);

	useEffect(() => {

		if (!loading && authenticated) {
			(async () => {
				const userResponse = await api.get("/user");
				const user = userResponse.data.user;
				setUser(user);
			})();
		}

	}, [loading]);

	return (
		<Main>
			{authenticated ? (
				<UserInfosContainer>
					<strong>User Infos</strong>
					<div className="user-infos">
						<span>Email: {user.email}</span>
						<span>UID: {user.uid}</span>
					</div>
					<div className="user-actions">
						<button onClick={handleLogout}>
							Log out
						</button>
					</div>
				</UserInfosContainer>
			) : (
				<LoginAndSignupContainer>
					<strong>You are not logged in</strong>
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
			)}
		</Main>
	);
}
