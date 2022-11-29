import {
	NavMenuContainer,
	SideMenuContainer,
} from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import { AiOutlineHome } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { BiRadio } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { theme } from "../../styles/theme";
import { MenuMobile } from "../MenuMobile";

export function SideMenu() {
	return (
		<SideMenuContainer>
			<img src={Logo} />
			<NavMenuContainer>
				<a href="/"><AiOutlineHome className="icon" color={theme.iconColor} /></a>
				<a href="/"><BsMusicPlayer className="icon" color={theme.iconColor} /></a>
				<a href="/"><BiRadio className="icon" color={theme.iconColor} /></a>
			</NavMenuContainer>
			<NavMenuContainer>
				<a href="/"><AiOutlineUser className="icon" color={theme.iconColor} /></a>
				<a href="/"><BiExit className="icon" color={theme.iconColor} /></a>
			</NavMenuContainer>

			<MenuMobile />
		</SideMenuContainer>
	);
}
