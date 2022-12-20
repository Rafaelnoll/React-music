import { ToMinutes } from "./toMinutes";

export function toAlbumTime(tracks) {
	const allTracksTime = tracks.items.reduce((acc, currentTime) => {
		return acc + currentTime.track.duration_ms;
	}, 0);
	const albumTime = (allTracksTime / 1000) / 60;
	const totalTime = albumTime < 60 ? `${ToMinutes(allTracksTime)} min` : `${(albumTime / 60).toFixed(0)} hrs`;
	return totalTime;
}
