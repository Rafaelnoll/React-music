import {
	NavMenuContainer,
	SideMenuContainer,
} from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/logo.svg";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { BiRadio, BiExit } from "react-icons/bi";
import { theme } from "../../styles/theme";
import { MenuMobile } from "../MenuMobile";

export function SideMenu() {
	return (
		<SideMenuContainer>
			<Link to="/">
				<img src={Logo} />
			</Link>
			<NavMenuContainer>
				<Link to="/"><AiOutlineHome className="icon" color={theme.iconColor} /></Link>
				<Link to="/collections"><BsMusicPlayer className="icon" color={theme.iconColor} /></Link>
				<Link to="/"><BiRadio className="icon" color={theme.iconColor} /></Link>
			</NavMenuContainer>
			<NavMenuContainer>
				<Link to="/profile"><AiOutlineUser className="icon" color={theme.iconColor} /></Link>
				<Link to="/"><BiExit className="icon" color={theme.iconColor} /></Link>
			</NavMenuContainer>

			<MenuMobile />
		</SideMenuContainer>
	);
}
