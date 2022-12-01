import { MusicCardContainer, MusicCardOptions, MusicCardTexts } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
import P from "prop-types";

export function MusicCard({ image, name, artist, time }) {
	return (
		<MusicCardContainer>
			<img src={image} />
			<AiOutlineHeart className="like-button" />
			<MusicCardTexts>
				<span>{name}</span>
				<span>{artist}</span>
			</MusicCardTexts>
			<MusicCardOptions>
				<span>{time}</span>
				<SlOptionsVertical className="option-button" />
			</MusicCardOptions>
		</MusicCardContainer>
	);
}

MusicCard.propTypes = {
	image: P.node.isRequired,
	name: P.string.isRequired,
	artist: P.string.isRequired,
	time: P.string.isRequired,
};
