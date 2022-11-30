import { ChartContainer, ChartLikeButton, ChartTexts } from "./styles";
import P from "prop-types";
import { AiOutlineHeart } from "react-icons/ai";

export function Chart({ chartImage, name, artist, time }) {
	return (
		<ChartContainer>
			<img src={chartImage} />
			<ChartTexts>
				<strong>{name}</strong>
				<span className="artist">{artist}</span>
				<span className="time">{time}</span>
			</ChartTexts>
			<ChartLikeButton>
				<AiOutlineHeart />
			</ChartLikeButton>
		</ChartContainer>
	);
}

Chart.propTypes = {
	chartImage: P.node.isRequired,
	name: P.string.isRequired,
	artist: P.string.isRequired,
	time: P.string.isRequired,
};
