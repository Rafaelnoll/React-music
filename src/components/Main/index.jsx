import { HeroSection } from "../HeroSection";
import { SideMenu } from "../SideMenu";
import { TopNav } from "../TopNav";
import { Chart } from "../Chart";
import { MainContainer, MainContent } from "./styles";

export function Main() {
	return (
		<MainContainer>
			<SideMenu />
			<MainContent>
				<TopNav />
				<div className="top-charts-container">
					<HeroSection />
					<div className="top-charts">
						<h2>Top Charts</h2>
						<Chart />
						<Chart />
						<Chart />
					</div>
				</div>
			</MainContent>
		</MainContainer>
	);
}
