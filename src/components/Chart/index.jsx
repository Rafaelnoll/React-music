import { ChartContainer, ChartLikeButton, ChartTexts } from "./styles";
import ChartImage from "../../assets/imgs/chart-image.svg";
import { AiOutlineHeart } from "react-icons/ai";

export function Chart() {
	return (
		<ChartContainer>
			<img src={ChartImage} />
			<ChartTexts>
				<strong>Golden age of 80s</strong>
				<span className="artist">Sean swadder</span>
				<span className="time">2:34:45</span>
			</ChartTexts>
			<ChartLikeButton>
				<AiOutlineHeart />
			</ChartLikeButton>
		</ChartContainer>
	);
}
