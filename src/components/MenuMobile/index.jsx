import { MobileButton, MobileContainer, MobileMenu } from "./styles";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { BiRadio, BiExit } from "react-icons/bi";

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
						<a href="/"><AiOutlineHome className="icon" color={theme.iconColor} /> Home</a>
						<a href="/"><BsMusicPlayer className="icon" color={theme.iconColor} /> My collections</a>
						<a href="/"><BiRadio className="icon" color={theme.iconColor} /> Radio</a>
						<a href="/"><AiOutlineUser className="icon" color={theme.iconColor} />Profile</a>
						<a href="/"><BiExit className="icon" color={theme.iconColor} /> Log out</a>
					</div>
				</MobileMenu>
			)}
		</MobileContainer>
	);
}
