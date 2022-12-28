import { useNavigate } from "react-router-dom";
import { Main } from "../../components/Main";
import { MusicsList } from "../../components/MusicsList";
import {
	AlbumTemplate,
	AlbumTemplateHeader,
	ActionButtons
} from "./styles";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbum } from "../../utils/getAlbum";
import { toAlbumTime } from "../../utils/toAlbumTime";
import api from "../../api";

export function Album() {
	const [album, setAlbum] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getAlbum(id)
			.then((response) => {
				setAlbum(response);
				setIsLoaded(true);
			})
			.catch((error) => {
				if (error) {
					navigate("/*");
					return;
				}
			});

	}, []);

	async function addInCollections() {
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
								<p>{album.description}</p>
								<span>{album.tracks.total} songs - {toAlbumTime(album.tracks)}</span>
								<ActionButtons>
									<button><AiFillPlayCircle className="icon" /> Play all</button>
									<button onClick={addInCollections} ><BsMusicPlayer className="icon" /> Add to collection</button>
								</ActionButtons>
							</div>
						</AlbumTemplateHeader>
						<MusicsList tracks={album.tracks.items} />
					</div>
				</Main>
			</AlbumTemplate>
		)
	);
}
