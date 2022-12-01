import { MusicCard } from "../MusicCard";
import { MusicsListContainer } from "./styles";

const testImage = "https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef";

const musics = [
	{
		id: 156436,
		image: testImage,
		name: "Everlong",
		artist: "Foo Figthers",
		time: "4:27",
	},
	{
		id: 52156436,
		image: testImage,
		name: "Can you feel the sun",
		artist: "Missio",
		time: "3:34",
	},
	{
		id: 66436,
		image: testImage,
		name: "Thunder",
		artist: "Imagine Dragons",
		time: "3:57",
	},
	{
		id: 4239836,
		image: testImage,
		name: "Let me love you",
		artist: "Krisx",
		time: "4:17",
	},
];

export function MusicsList() {
	return (
		<MusicsListContainer>
			{musics.map(music => (
				<MusicCard
					key={music.id}
					image={music.image}
					name={music.name}
					artist={music.artist}
					time={music.time}
				/>
			))}
		</MusicsListContainer>
	);
}
