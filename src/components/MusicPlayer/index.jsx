import { useContext, useEffect, useRef } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";
import {
	MusicPlayerContainer,
	ProgressBar,
	TrackControls,
	TrackInfo,
	VolumeBar,
	VolumeTrack,
} from "./styles";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { useState } from "react";

// Volume percent
const volumeDefaultValue = localStorage.getItem("user-volume") * 100;

export function MusicPlayer() {
	const { state, playerDispatch } = useContext(MusicPlayerContext);
	const [isPlaying, setIsPlaying] = useState(true);
	const progressBar = useRef(false);
	const volumeBar = useRef(false);

	useEffect(() => {

		const progressBarPercent = setInterval(() => {

			if (progressBar.current) {
				const audioRef = state.currentTrack.track;

				if (!localStorage.getItem("user-volume")) {
					volumeBar.current.value = 50;
				}

				const volume = volumeBar.current.value / 100;

				localStorage.setItem("user-volume", volume);
				audioRef.volume = volume;

				const percentProgressBar = (audioRef?.currentTime / audioRef?.duration) * 100;
				progressBar.current.style.width = `${percentProgressBar}%`;

				if (audioRef && audioRef.paused) {
					clearInterval(progressBarPercent);
				}

				if (percentProgressBar === 100 || isNaN(percentProgressBar)) {
					clearInterval(progressBarPercent);
					nextTrack();

					if (audioRef) {
						audioRef.currentTime = 0;
					}

					progressBar.current.style.width = "0%";
				}

				return;
			}

			clearInterval(progressBarPercent);

		}, 500);

	}, [state]);

	useEffect(() => {

		if (state.currentTrack) {
			const audioRef = state.currentTrack.track;
			audioRef.volume = localStorage.getItem("user-volume");
			audioRef.play();
			setIsPlaying(true);
		}

	}, [state.currentTrack]);

	function playTrack() {
		const audioRef = state.currentTrack.track;

		if (!isPlaying) {
			audioRef.play();
			setIsPlaying(true);
			return;
		}

		setIsPlaying(false);
		audioRef.pause();
	}

	async function nextTrack() {
		const currentTrack = state.currentTrack.track;
		await currentTrack.pause();
		let nextTrackIndex = state.currentTrack.trackIndex + 1;

		if (nextTrackIndex >= state.albumTracks.length) {
			nextTrackIndex = 0;
		}

		const nextTrack = state.albumTracks[nextTrackIndex].track;
		const trackAudio = new Audio(nextTrack.preview_url);

		const nextTrackData = {
			name: nextTrack.name,
			image: nextTrack.album.images[0].url,
			artist: nextTrack.artists[0].name,
			trackIndex: nextTrackIndex,
			track: trackAudio,
		};

		await playerDispatch({ type: "play", track: nextTrackData });

	}

	async function previusTrack() {
		const currentTrack = state.currentTrack.track;
		await currentTrack.pause();
		let previusTrackIndex = state.currentTrack.trackIndex - 1;

		if (previusTrackIndex < 0) {
			previusTrackIndex = state.albumTracks.length - 1;
		}

		const previusTrack = state.albumTracks[previusTrackIndex].track;
		const trackAudio = new Audio(previusTrack.preview_url);

		const previusTrackData = {
			name: previusTrack.name,
			image: previusTrack.album.images[0].url,
			artist: previusTrack.artists[0].name,
			trackIndex: previusTrackIndex,
			track: trackAudio,
		};

		await playerDispatch({ type: "play", track: previusTrackData });
	}

	return (
		state.currentTrack && (
			<MusicPlayerContainer>
				<TrackInfo>
					<img src={state.currentTrack.image} />
					<div className="track-texts">
						<strong>{state.currentTrack.name}</strong>
						<span>{state.currentTrack.artist}</span>
					</div>
				</TrackInfo>
				<TrackControls>
					<div className="control-buttons">
						<button onClick={previusTrack}><BiSkipPrevious /></button>
						<button onClick={playTrack} className="play-button">
							{isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
						</button>
						<button onClick={nextTrack}><BiSkipNext /></button>
					</div>
					<ProgressBar>
						<div ref={progressBar} className="track-progress-bar" />
					</ProgressBar>
					<div className="progress-bar-box">
						<div className="progress-bar" />
					</div>
				</TrackControls>
				<VolumeTrack>
					<BsFillVolumeUpFill className="volume-icon" />
					<div className="volume-bar-box">
						<VolumeBar ref={volumeBar} type="range" defaultValue={volumeDefaultValue} />
					</div>
				</VolumeTrack>
			</MusicPlayerContainer>
		)
	);
}
