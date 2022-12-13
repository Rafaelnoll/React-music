import { useEffect, useState } from "react";
import { AlbumCard } from "../AlbumCard";
import { AlbumsContainer } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import P from "prop-types";
import "swiper/css";
import api from "../../api/";

const swiperBreakPoints = {
	// when window width is >= 200px
	200: {
		slidesPerView: 2,
		spaceBetween: 5
	},
	// when window width is >= 400px
	400: {
		slidesPerView: 3,
		spaceBetween: 10
	},
	// when window width is >= 820px
	820: {
		slidesPerView: 5,
		spaceBetween: 20
	},
	// when window width is >= 1200px
	1200: {
		slidesPerView: 8,
		spaceBetween: 20
	},
};

const albumsTest = [{"id":"1WhwFdXyzJvL0xs3ULGosI","name":"Dawn FM","image":"https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d"},{"id":"2K5cYGFz5vyzVZZJgMyCj1","name":"Evolve","image":"https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a"},{"id":"5RvWpV42o0Yqt4gMF7BD8q","name":"Mercury - Acts 1 & 2","image":"https://i.scdn.co/image/ab67616d0000b273fc915b69600dce2991a61f13"},{"id":"0c9opUUwzad8AWE42KUEw9","name":"Greatest Hits","image":"https://i.scdn.co/image/ab67616d0000b273136d7250568820409f8fdd60"},{"id":"6M0Dbn9oXGbrX9AFpn9dUU","name":"Echoes, Silence, Patience & Grace","image":"https://i.scdn.co/image/ab67616d0000b27383e260c313dc1ff1f17909cf"}];

export function AlbumsCarrossel({ label }) {
	// eslint-disable-next-line no-unused-vars
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		api.get("/albums")
			.then((response) => {
				const albums = response.data.public_playlists;
				setAlbums(albums);
			})
			.catch((error) => {
				if (error) {
					return;
				}
			});
	}, []);

	return (
		<>
			<AlbumsContainer>
				<h2>{label}</h2>
				<Swiper
					slidesPerView={3}
					breakpoints={swiperBreakPoints}
				>
					{albumsTest.map((album) => (
						<SwiperSlide key={album.id}>
							<AlbumCard
								albumId={album.id}
								name={album.name}
								albumImage={album.image}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</AlbumsContainer >
		</>
	);
}

AlbumsCarrossel.propTypes = {
	label: P.string.isRequired,
};
