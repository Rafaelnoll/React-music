import { MobileButton, MobileContainer, MobileMenu } from "./styles";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { BiRadio, BiExit } from "react-icons/bi";
import { Link } from "react-router-dom";

export function MenuMobile() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
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
						<Link to="/"><AiOutlineHome className="icon" color={theme.iconColor} /> Home</Link >
						<Link to="/collections"><BsMusicPlayer className="icon" color={theme.iconColor} /> My collections</Link >
						<Link to="/"><BiRadio className="icon" color={theme.iconColor} /> Radio</Link >
						<Link to="/profile"><AiOutlineUser className="icon" color={theme.iconColor} />Profile</Link >
						<Link to="/"><BiExit className="icon" color={theme.iconColor} /> Log out</Link >
					</div>
				</MobileMenu>
			)}
		</MobileContainer>
	);
}
