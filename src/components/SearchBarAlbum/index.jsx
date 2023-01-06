import { Link } from "react-router-dom";
import P from "prop-types";
import * as S from "./styles";

export function SearchBarAlbum({ id, name, image }) {
	return (
		<Link to={`/album/${id}`}>
			<S.SearchBarAlbumContainer>
				<img src={image} />
				<S.SearchBarAlbumTexts>
					<span translate="no">{name}</span>
				</S.SearchBarAlbumTexts>
			</S.SearchBarAlbumContainer>
		</Link>
	);
}

SearchBarAlbum.propTypes = {
	id: P.string.isRequired,
	name: P.string.isRequired,
	image: P.string.isRequired,
};
