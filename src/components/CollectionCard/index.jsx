import { CollectionCardContainer } from "./styles";
import { AiFillPlayCircle } from "react-icons/ai";

const testImage = "https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef";

export function CollectionCard() {
	return (
		<CollectionCardContainer backgroundImage={testImage}>
			<strong>Limits</strong>
			<span className="artist-name">John watts</span>
			<span className="number-of-likes">2.3m likes</span>
			<button><AiFillPlayCircle /></button>
		</CollectionCardContainer>
	);
}
