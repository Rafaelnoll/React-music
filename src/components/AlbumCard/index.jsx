import { AlbumCardContainer } from "./styles";
import P from "prop-types";

export function AlbumCard({ albumImage, name, artist }) {
	return (
		<AlbumCardContainer>
			<img src={albumImage} />
			<strong>{name}</strong>
			<span>{artist}</span>
		</AlbumCardContainer>
	);
}

AlbumCard.propTypes = {
	albumImage: P.node.isRequired,
	name: P.string.isRequired,
	artist: P.string.isRequired,
};
