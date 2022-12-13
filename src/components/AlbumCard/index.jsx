import { AlbumCardContainer } from "./styles";
import { Link } from "react-router-dom";
import P from "prop-types";

export function AlbumCard({ albumId, albumImage, name }) {
	return (
		<Link to={`/album/${albumId}`}>
			<AlbumCardContainer>
				<img src={albumImage} />
				<strong>{name}</strong>
			</AlbumCardContainer>
		</Link>
	);
}

AlbumCard.propTypes = {
	albumId: P.string.isRequired,
	albumImage: P.node.isRequired,
	name: P.string.isRequired,
};
