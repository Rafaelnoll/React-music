import { SideMenu } from "../SideMenu";
import { TopNav } from "../TopNav";
import { MainContainer, MainContent } from "./styles";
import { TopCharts } from "../TopCharts";

export function Main() {
	return (
		<MainContainer>
			<SideMenu />
			<MainContent>
				<TopNav />
				<TopCharts />
			</MainContent>
		</MainContainer>
	);
}
