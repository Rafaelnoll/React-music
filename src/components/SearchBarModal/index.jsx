import P from "prop-types";
import { SearchBarAlbum } from "../SearchBarAlbum";
import * as S from "./styles";

function SearchBarModal({ albums }) {
	return (
		<S.SearchBarModalContainer>
			<S.SearchBarList>
				{albums.map(album => (
					<SearchBarAlbum
						key={album.id}
						name={album.name}
						id={album.id}
						image={album.image}
					/>
				))}
			</S.SearchBarList>
		</S.SearchBarModalContainer>
	);
}

export default SearchBarModal;

SearchBarModal.propTypes = {
	albums: P.array,
};
