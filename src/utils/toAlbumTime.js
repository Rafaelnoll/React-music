import { ToMinutes } from "./toMinutes";

export function toAlbumTime(tracks, { showTimeType = true } = {}) {
	const allTracksTime = tracks.items.reduce((acc, currentTime) => {
		return acc + currentTime.track.duration_ms;
	}, 0);
	const albumTime = (allTracksTime / 1000) / 60;

	if (showTimeType) {
		const totalTimeExtended = albumTime < 60 ? `${ToMinutes(allTracksTime)} min` : `${(albumTime / 60).toFixed(0)} hrs`;
		return totalTimeExtended;
	}

	const totalTime = albumTime < 60 ? `${ToMinutes(allTracksTime)}` : `${(albumTime / 60).toFixed(0)}`;
	return totalTime;
}
