import { TopChartContainer, ChartsList } from "./styles";
import { HeroSection } from "../HeroSection";
import { Chart } from "../Chart";
import { useState } from "react";
import { useEffect } from "react";
import { getTopCharts } from "../../utils/getTopcharts";

export function TopCharts() {
	const [topCharts, setTopCharts] = useState([]);

	useEffect(() => {
		(async () => {
			const topCharts = await getTopCharts();
			setTopCharts(topCharts);
		})();
	}, []);

	return (
		<TopChartContainer className="top-charts-container">
			<HeroSection />
			<div className="top-charts">
				<h2>Top Charts</h2>
				<ChartsList className="charts-list">
					{topCharts.map(chart => (
						<Chart
							key={chart.id}
							chartId={chart.id}
							chartImage={chart.image}
							name={chart.name}
							artist={chart.artist}
							time={chart.time}
						/>
					))}
				</ChartsList>
			</div>
		</TopChartContainer>
	);
}
