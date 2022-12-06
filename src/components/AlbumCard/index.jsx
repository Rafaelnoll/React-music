import { AlbumCardContainer } from "./styles";
import P from "prop-types";

export function AlbumCard({ albumImage, name }) {
	return (
		<AlbumCardContainer>
			<img src={albumImage} />
			<strong>{name}</strong>
		</AlbumCardContainer>
	);
}

AlbumCard.propTypes = {
	albumImage: P.node.isRequired,
	name: P.string.isRequired,
};
