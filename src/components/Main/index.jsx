import { SideMenu } from "../SideMenu";
import { TopNav } from "../TopNav";
import { MainContainer, MainContent } from "./styles";

export function Main() {
	return (
		<MainContainer>
			<SideMenu />
			<MainContent>
				<TopNav />
			</MainContent>
		</MainContainer>
	);
}
