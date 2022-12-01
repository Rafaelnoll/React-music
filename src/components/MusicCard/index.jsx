import { MusicCardContainer, MusicCardOptions, MusicCardTexts } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

const testImage = "https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef";

export function MusicCard() {
	return (
		<MusicCardContainer>
			<img src={testImage} />
			<AiOutlineHeart className="like-button" />
			<MusicCardTexts>
				<span>Let me love you - Krisx</span>
				<span>Single</span>
			</MusicCardTexts>
			<MusicCardOptions>
				<span>4:17</span>
				<SlOptionsVertical className="option-button"/>
			</MusicCardOptions>
		</MusicCardContainer>
	);
}
