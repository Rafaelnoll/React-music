import { HeroSection } from "../HeroSection";
import { SideMenu } from "../SideMenu";
import { TopNav } from "../TopNav";
import { MainContainer, MainContent } from "./styles";
import { Chart } from "../Chart";

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
						<div className="charts-list">
							<Chart />
							<Chart />
							<Chart />
						</div>
					</div>
				</div>
			</MainContent>
		</MainContainer>
	);
}
