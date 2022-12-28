import { MusicCard } from "../MusicCard";
import { MusicsListContainer } from "./styles";
import P from "prop-types";
import { ToMinutes } from "../../utils/toMinutes";
import { useContext, useEffect } from "react";
import { MusicPlayerContext } from "../../contexts/MusicPlayerContext";

export function MusicsList({ tracks = [] }) {
	const { state, playerDispatch } = useContext(MusicPlayerContext);

	function selectAlbum() {
		playerDispatch({ type: "select_album", albumTracks: tracks });
	}

	useEffect(() => {

		if (state.albumTracks[0] !== undefined) {
			return;
		}

		selectAlbum();
	}, []);

	return (
		<MusicsListContainer>
			{tracks.map(({ track }, trackIndex) => (
				<MusicCard
					key={track.id}
					image={track.album.images[0].url}
					name={track.name}
					artist={track.album.artists[0].name}
					duration={ToMinutes(track.duration_ms)}
					previewUrl={track.preview_url}
					trackIndex={trackIndex}
					selectAlbum={selectAlbum}
				/>
			))}
		</MusicsListContainer>
	);
}

MusicsList.propTypes = {
	tracks: P.array,
};
