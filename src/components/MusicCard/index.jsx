import { MusicCardContainer, MusicCardOptions, MusicCardTexts } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
import P from "prop-types";
import { useContext } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";

export function MusicCard({ image, name, artist, duration, previewUrl }) {
	const { playerDispatch } = useContext(MusicPlayerContext);

	function playTrack() {
		playerDispatch({ type: "play", track: previewUrl });
		const track = new Audio(previewUrl);
		track.play();
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
