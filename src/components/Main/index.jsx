import P from "prop-types";
import { SideMenu } from "../SideMenu";
import { TopNav } from "../TopNav";
import { MainContainer, MainContent } from "./styles";

export function Main({ children }) {
	return (
		<MainContainer>
			<SideMenu />
			<MainContent>
				<TopNav />
				{children}
			</MainContent>
		</MainContainer>
	);
}

Main.propTypes = {
	children: P.node.isRequired,
};
