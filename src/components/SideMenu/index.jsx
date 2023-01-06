import {
	NavMenuContainer,
	SideMenuContainer,
} from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.svg";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { theme } from "../../styles/theme";
import { MenuMobile } from "../MenuMobile";
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";

export function SideMenu() {
	const { authenticated, handleLogout } = useContext(AuthenticationContext);

	return (
		<SideMenuContainer>
			<Link to="/">
				<img src={Logo} />
			</Link>
			<NavMenuContainer>
				<Link to="/"><AiOutlineHome className="icon" color={theme.iconColor} /></Link>
				<Link to="/collections"><BsMusicPlayer className="icon" color={theme.iconColor} /></Link>
				<Link to="/profile"><AiOutlineUser className="icon" color={theme.iconColor} /></Link>
				{authenticated && <BiExit onClick={handleLogout} className="icon" color={theme.iconColor} />}
			</NavMenuContainer>

			<MenuMobile />
		</SideMenuContainer>
	);
}
