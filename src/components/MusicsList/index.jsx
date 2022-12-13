import { useEffect, useState } from "react";
import { getAlbumTracks } from "../../utils/getAlbumTracks";
import { MusicCard } from "../MusicCard";
import { MusicsListContainer } from "./styles";
import P from "prop-types";

export function MusicsList({ albumId }) {
	const [musicTracks, setMusicTracks] = useState([]);

	useEffect(() => {
		getAlbumTracks(albumId)
			.then((response) => setMusicTracks(response))
			.catch((error) => {
				if (error) return;
			});


	}, []);

	return (
		<MusicsListContainer>
			{musicTracks.map(music => (
				<MusicCard
					key={music.id}
					image={music.image}
					name={music.name}
					artist={music.artist}
					duration={music.duration}
					previewUrl={music.previewUrl}
				/>
			))}
		</MusicsListContainer>
	);
}

MusicsList.propTypes = {
	albumId: P.string.isRequired,
};
