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

export function AlbumsCarrossel({ label }) {
	// eslint-disable-next-line no-unused-vars
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		api.get("/albums")
			.then((response) => {
				const albums = response.data;
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
					{albums.map((album) => (
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
