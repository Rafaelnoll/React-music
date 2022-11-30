import { TopChartContainer, ChartsList } from "./styles";
import { HeroSection } from "../HeroSection";
import { Chart } from "../Chart";
import ChartImage from "../../assets/imgs/chart-image.svg";

const topCharts = [
	{
		id: 113123,
		chartImage: ChartImage,
		name: "Golden age of 80's",
		artist: "Sean swodder",
		time: "2:34:45"
	},
	{
		id: 2423423,
		chartImage: ChartImage,
		name: "Reggae 'n' blues",
		artist: "DJ YK mule",
		time: "1:02:42"
	},
	{
		id: 35423423,
		chartImage: ChartImage,
		name: "Tomorrow's tunes",
		artist: "Obi Datti",
		time: "2:01:25"
	},
];

export function TopCharts() {
	return (
		<TopChartContainer className="top-charts-container">
			<HeroSection />
			<div className="top-charts">
				<h2>Top Charts</h2>
				<ChartsList className="charts-list">
					{topCharts.map(chart => (
						<Chart
							key={chart.id}
							chartImage={chart.chartImage}
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
