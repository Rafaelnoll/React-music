import { useState, useEffect } from "react";
import { createContext } from "react";
import P from "prop-types";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export const AuthenticationContext = createContext({});

export function AuthenticationProvider({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("@logged@user@token");

		if (token) {
			api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	function handleLogin(token) {
		localStorage.setItem("@logged@user@token", JSON.stringify(token));
		api.defaults.headers.Authorization = `Bearer ${token}`;
		setAuthenticated(true);
		navigate("/user");
	}

	function handleLogout() {
		setAuthenticated(false);
		localStorage.removeItem("@logged@user@token");
		api.defaults.headers.Authorization = undefined;
		navigate("/login");
	}

	return (
		<AuthenticationContext.Provider value={{ authenticated, loading, handleLogin, handleLogout }}>
			{children}
		</AuthenticationContext.Provider>
	);
}

AuthenticationProvider.propTypes = {
	children: P.node.isRequired,
};
