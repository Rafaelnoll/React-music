import { Main } from "../../components/Main";
import { MusicsList } from "../../components/MusicsList";
import {
	AlbumContent,
	AlbumTemplate,
	AlbumTemplateHeader,
	ActionButtons
} from "./styles";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbum } from "../../utils/getAlbum";

export function Album() {
	const [album, setAlbum] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		getAlbum(id)
			.then((response) => {
				setAlbum(response);
				setIsLoaded(true);
			})
			.catch((error) => {
				if (error) return;
			});

	}, []);

	return (
		isLoaded && (
			<AlbumTemplate backgroundImage={album.image.url}>
				<Main>
					<AlbumContent>
						<AlbumTemplateHeader>
							<div className="image-box">
								<img src={album.image.url} />
							</div>
							<div className="text-box">
								<h1>{album.name}</h1>
								<p>{album.description}</p>
								<span>{album.totalOfTracks} songs - {album.duration} hrs+</span>
								<ActionButtons>
									<button><AiFillPlayCircle className="icon" /> Play all</button>
									<button><BsMusicPlayer className="icon" /> Add to collection</button>
									<button><AiOutlineHeart className="icon-red" /></button>
								</ActionButtons>
							</div>
						</AlbumTemplateHeader>
						<MusicsList albumId={id} />
					</AlbumContent>
				</Main>
			</AlbumTemplate>
		)
	);
}
