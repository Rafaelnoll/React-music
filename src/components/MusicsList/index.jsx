import { MusicCard } from "../MusicCard";
import { MusicsListContainer } from "./styles";
import P from "prop-types";
import { ToMinutes } from "../../utils/toMinutes";

export function MusicsList({ tracks = [] }) {
	return (
		<MusicsListContainer>
			{tracks.map(({ track }) => (
				<MusicCard
					key={track.id}
					image={track.album.images[0].url}
					name={track.name}
					artist={track.album.artists[0].name}
					duration={ToMinutes(track.duration_ms)}
					previewUrl={track.preview_url}
				/>
			))}
		</MusicsListContainer>
	);
}

MusicsList.propTypes = {
	tracks: P.array,
};
