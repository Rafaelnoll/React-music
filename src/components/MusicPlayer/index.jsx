import { useContext } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";
import {
	MusicPlayerContainer,
	TrackControls,
	TrackInfo,
	VolumeTrack
} from "./styles";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { useState } from "react";

export function MusicPlayer() {
	const { state } = useContext(MusicPlayerContext);
	const [isPaused, setPaused] = useState(false);

	function playTrack() {
		const audioRef = state.currentTrack.track;

		if (!isPaused) {
			audioRef.play();
			return;
		}

		setPaused(true);
		audioRef.pause();
	}

	return (
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
	);
}
