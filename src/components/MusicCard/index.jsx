import { MusicCardContainer, MusicCardOptions, MusicCardTexts } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
import P from "prop-types";
import { useContext, useRef } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";

export function MusicCard({ image, name, artist, duration, previewUrl }) {
	const { state, playerDispatch } = useContext(MusicPlayerContext);
	const audioRef = useRef();

	function playTrack() {
		const track = new Audio(previewUrl);
		audioRef.current = track;

		if (state.currentTrack) {
			state.currentTrack.track.pause();
			playerDispatch({ type: "clear" });
		}

		playerDispatch({
			type: "play", track: {
				track: audioRef.current,
				image,
				name,
				artist,
			}
		});
		audioRef.current.play();
	}

	return (
		<MusicCardContainer onClick={playTrack}>
			<img src={image} />
			<AiOutlineHeart className="like-button" />
			<MusicCardTexts>
				<span>{name}</span>
				<span>{artist}</span>
			</MusicCardTexts>
			<MusicCardOptions>
				<span>{duration}</span>
				<SlOptionsVertical className="option-button" />
			</MusicCardOptions>
		</MusicCardContainer>
	);
}

MusicCard.propTypes = {
	image: P.node.isRequired,
	name: P.string.isRequired,
	artist: P.string.isRequired,
	duration: P.string.isRequired,
	previewUrl: P.string.isRequired,
};
