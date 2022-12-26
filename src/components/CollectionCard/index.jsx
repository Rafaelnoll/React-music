import { CollectionCardContainer } from "./styles";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import P from "prop-types";

export function CollectionCard({album}) {
	return (
		<Link to={`/album/${album.albumId}`}>
			<CollectionCardContainer backgroundImage={album.image}>
				<strong>{album.name}</strong>
				<span className="artist-name">{album.artist}</span>
				<span className="number-of-likes">{album.totalOfTracks} Musics</span>
				<button><AiFillPlayCircle /></button>
			</CollectionCardContainer>
		</Link>
	);
}

CollectionCard.propTypes = {
	album: P.object.isRequired,
};
