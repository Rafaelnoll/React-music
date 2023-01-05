import P from "prop-types";
import { SearchBar } from "../SearchBar";
import { SideMenu } from "../SideMenu";
import { MainContainer, MainContent } from "./styles";

export function Main({ children }) {
	return (
		<MainContainer>
			<SideMenu />
			<MainContent>
				<SearchBar />
				{children}
			</MainContent>
		</MainContainer>
	);
}

Main.propTypes = {
	children: P.node.isRequired,
};
