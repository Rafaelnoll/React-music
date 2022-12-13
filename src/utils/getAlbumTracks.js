import api from "../api";
import { ToMinutes } from "./toMinutes";

export async function getAlbumTracks(id) {
	const response = await api.get(`/albums/tracks/${id}`, {
	});

	const tracks = response.data.items;
	const newArrayOfTracks = tracks.map((track) => {
		const {
			album,
			artists,
			duration_ms,
			preview_url,
			name,
			id,
		} = track.track;

		// Track duration in minutes
		const durationMinutes = ToMinutes(duration_ms);

		return {
			id,
			name,
			image: album.images[0].url,
			duration: durationMinutes,
			artist: artists[0].name,
			previewUrl: preview_url,
		};
	});

	return newArrayOfTracks;
}

