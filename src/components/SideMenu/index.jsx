import {
	NavMenuContainer,
	SideMenuContainer,
	MobileContainer,
	MobileButton,
	MobileMenu
} from "./styles";
import Logo from "../../assets/imgs/logo.svg";
import { AiOutlineHome } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { BiRadio } from "react-icons/bi";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { theme } from "../../styles/theme";
import { useState } from "react";

export function SideMenu() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

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

			<MobileContainer>
				<MobileButton>
					<AiOutlineMenu onClick={() => setMenuIsOpen(true)} />
				</MobileButton>
				{menuIsOpen && (
					<MobileMenu>
						<header>
							<AiOutlineClose className="close-button" onClick={() => setMenuIsOpen(false)} />
						</header>
						<div className="mobile-nav">
							<a href="/"><AiOutlineHome className="icon" color={theme.iconColor} /> Home</a>
							<a href="/"><BsMusicPlayer className="icon" color={theme.iconColor} /> My collections</a>
							<a href="/"><BiRadio className="icon" color={theme.iconColor} /> Radio</a>
							<a href="/"><AiOutlineUser className="icon" color={theme.iconColor} />Profile</a>
							<a href="/"><BiExit className="icon" color={theme.iconColor} /> Log out</a>
						</div>
					</MobileMenu>
				)}
			</MobileContainer>
		</SideMenuContainer>
	);
}
