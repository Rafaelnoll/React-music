import { useNavigate } from "react-router-dom";
import { Main } from "../../components/Main";
import { MusicsList } from "../../components/MusicsList";
import {
	AlbumTemplate,
	AlbumTemplateHeader,
} from "./styles";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getAlbum } from "../../utils/getAlbum";
import { toAlbumTime } from "../../utils/toAlbumTime";
import api from "../../api";
import { AlbumActionButtons } from "../../components/AlbumActionButtons";
import { AlbumsContext } from "../../contexts/AlbumsContext";

export function Album() {
	const [album, setAlbum] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	const { albums } = useContext(AlbumsContext);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function loadAlbum() {
			try {
				const album = await getAlbum(id);
				setIsLoaded(true);
				setAlbum(album);
			} catch (error) {
				navigate("/*");
			}
		}

		loadAlbum();
	}, [albums]);

	async function handleAddInCollections() {
		await api.post("/collection/album", {
			albumId: id,
			name: album.name,
			image: album.image,
			totalOfTracks: album.tracks.total,
			artist: album.tracks.items[0].track.artists[0].name,
		});
	}

	return (
		isLoaded && (
			<AlbumTemplate backgroundImage={album.image}>
				<Main>
					<div className="album-content">
						<AlbumTemplateHeader>
							<div className="image-box">
								<img src={album.image} />
							</div>
							<div className="text-box">
								<h1>{album.name}</h1>
								<span>{album.tracks.total} songs - {toAlbumTime(album.tracks)}</span>
								<AlbumActionButtons handleAddInCollections={handleAddInCollections} albumId={id} />
							</div>
						</AlbumTemplateHeader>
						<MusicsList tracks={album.tracks.items} />
					</div>
				</Main>
			</AlbumTemplate>
		)
	);
}
