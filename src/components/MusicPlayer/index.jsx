import { useContext, useEffect, useRef } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";
import {
	MusicPlayerContainer,
	ProgressBar,
	TrackControls,
	TrackInfo,
	VolumeTrack,
} from "./styles";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { useState } from "react";

export function MusicPlayer() {
	const { state } = useContext(MusicPlayerContext);
	const [isPaused, setPaused] = useState(false);
	const progressBar = useRef(false);

	useEffect(() => {

		const progressBarPercent = setInterval(() => {

			if (progressBar.current) {
				const audioRef = state.currentTrack.track;
				const percentProgressBar = (audioRef?.currentTime / audioRef?.duration) * 100;
				progressBar.current.style.width = `${percentProgressBar}%`;

				if (audioRef && audioRef.paused) {
					clearInterval(progressBarPercent);
				}

				if (percentProgressBar === 100 || isNaN(percentProgressBar)) {
					clearInterval(progressBarPercent);

					if (audioRef) {
						audioRef.currentTime = 0;
					}

					progressBar.current.style.width = "0%";
				}

				return;
			}

			clearInterval(progressBarPercent);

		}, 500);

	}, [state, isPaused]);

	function playTrack() {
		const audioRef = state.currentTrack.track;

		if (isPaused) {
			audioRef.play();
			setPaused(false);
			return;
		}

		setPaused(true);
		audioRef.pause();
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
						<button><BiSkipPrevious /></button>
						<button onClick={playTrack} className="play-button"><AiFillPlayCircle /></button>
						<button><BiSkipNext /></button>
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
						<div className="volume-bar" />
					</div>
				</VolumeTrack>
			</MusicPlayerContainer>
		)
	);
}
