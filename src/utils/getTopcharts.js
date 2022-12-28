import api from "../api";
import { toAlbumTime } from "./toAlbumTime";

export async function getTopCharts() {
	const response = await api.get("/topCharts");
	const topChartsData = response.data;


	const topCharts = topChartsData.map((chart) => {
		const albumTime = toAlbumTime(chart.tracks);

		return {
			id: chart.id,
			image: chart.image,
			name: chart.name,
			artist: chart.tracks.items[0].track.artists[0].name,
			time: albumTime,
		};

	});

	return topCharts;
}

