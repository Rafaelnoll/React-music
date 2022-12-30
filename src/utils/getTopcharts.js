import { toAlbumTime } from "./toAlbumTime";

export async function getTopCharts(albums) {
	const topChartsFiltred = albums.filter((album) => album.topChart);

	const topCharts = topChartsFiltred.map((chart) => {
		const albumTime = toAlbumTime(chart.tracks, { showTimeType: false });

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

