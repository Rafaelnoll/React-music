import { AlbumCardContainer } from "./styles";
import AlbumImage from "../../assets/imgs/albumImage.svg";

export function AlbumCard() {
	return (
		<AlbumCardContainer>
			<img src={AlbumImage} />
			<strong>Life in a bubble</strong>
			<span>The van</span>
		</AlbumCardContainer>
	);
}
