import { TopChartContainer, ChartsList } from "./styles";
import { HeroSection } from "../HeroSection";
import { Chart } from "../Chart";

export function TopCharts() {
	return (
		<TopChartContainer className="top-charts-container">
			<HeroSection />
			<div className="top-charts">
				<h2>Top Charts</h2>
				<ChartsList className="charts-list">
					<Chart />
					<Chart />
					<Chart />
				</ChartsList>
			</div>
		</TopChartContainer>
	);
}
