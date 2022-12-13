import api from "../api";

export async function getAlbum(id) {
	const response = await api.get(`/albums/${id}`);
	const {
		name,
		images,
		description,
		tracks,
	} = response.data;
	const totalOfTracks = tracks.total;

	// tracks duration in milisseconds
	const durationMs = tracks.items.reduce((acc, currentTrack) => {
		return acc + currentTrack.track["duration_ms"];
	}, 0);

	// tracks duration in hours
	const durationHours = ((durationMs / 1000) / 60 / 60).toFixed();

	return {
		id,
		name,
		image: images[0],
		description,
		tracks: tracks.items,
		totalOfTracks,
		duration: durationHours,
	};
}

