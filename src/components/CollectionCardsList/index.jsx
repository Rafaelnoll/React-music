import { CollectionCardsListContainer } from "./styles";
import { CollectionCard } from "../CollectionCard";
import { useEffect } from "react";
import api from "../../api";
import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/AuthenticationContext";
import { useState } from "react";
import { LoginAndSignUpSection } from "../LoginAndSignUpSection";

export function CollectionCardsList() {
	const [albums, setAlbums] = useState([]);
	const { loading, authenticated } = useContext(AuthenticationContext);

	useEffect(() => {
		async function loadCollectionsAlbums() {
			const collectionsAlbumsResponse = await api.get("/collection/album");
			setAlbums(collectionsAlbumsResponse.data.albums);
		}

		if (!loading && authenticated) {
			loadCollectionsAlbums();
		}
	}, [loading]);

	if (authenticated) {
		return (
			<CollectionCardsListContainer>
				{albums.map(album => (
					<CollectionCard key={album.albumId} album={album} />
				))}
			</CollectionCardsListContainer>
		);
	}

	return (
		<LoginAndSignUpSection title="To use this feature you have to login"/>
	);
}
