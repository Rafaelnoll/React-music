import { AlbumActionButtonsContainer } from "./styles";
import { BsMusicPlayer } from "react-icons/bs";
import P from "prop-types";
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { useEffect } from "react";
import api from "../../api";
import { useState } from "react";

export function AlbumActionButtons({ handleAddInCollections, albumId }) {
	const [isInCollections, setIsInColletions] = useState(false);
	const { authenticated } = useContext(AuthenticationContext);

	useEffect(() => {

		if (!authenticated) return;

		async function verifyCollectionsAlbums() {
			const collectionsAlbumsResponse = await api.get("/collection/album");
			const collectionsAlbums = collectionsAlbumsResponse.data.albums;

			const filtredAlbums = collectionsAlbums.filter(album => album.albumId === albumId);

			if (filtredAlbums[0] !== undefined) {
				setIsInColletions(true);
				return;
			}

			setIsInColletions(false);

		}

		verifyCollectionsAlbums();

	}, []);

	function addInCollections(){
		handleAddInCollections();
		setIsInColletions(true);
	}

	async function removeFromCollections(){
		await api.delete(`/collection/album/${albumId}`);
		setIsInColletions(false);
	}

	return (
		<AlbumActionButtonsContainer>
			{!isInCollections ? (
				<button onClick={addInCollections} disabled={!authenticated}><BsMusicPlayer className="icon" />Add to collection</button>
			) :
				<button onClick={removeFromCollections} disabled={!authenticated}><BsMusicPlayer className="icon" />Remove from collection</button>
			}
		</AlbumActionButtonsContainer>
	);
}

AlbumActionButtons.propTypes = {
	handleAddInCollections: P.func.isRequired,
	albumId: P.string,
};
