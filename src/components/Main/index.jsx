import { SideMenu } from "../SideMenu";
import { TopNav } from "../TopNav";
import { MainContainer, MainContent } from "./styles";
import { TopCharts } from "../TopCharts";
import { AlbumsCarrossel } from "../AlbumsCarrossel";

export function Main() {
	return (
		<MainContainer>
			<SideMenu />
			<MainContent>
				<TopNav />
				<TopCharts />
				<AlbumsCarrossel label="New releases" />
			</MainContent>
		</MainContainer>
	);
}
