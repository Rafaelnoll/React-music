import { useContext } from "react";
import { AlbumCard } from "../AlbumCard";
import { AlbumsContainer } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import P from "prop-types";
import "swiper/css";
import { AlbumsContext } from "../../contexts/AlbumsContext";

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
	const { albums } = useContext(AlbumsContext);

	return (
		<>
			<AlbumsContainer>
				<h2>{label}</h2>
				<Swiper
					slidesPerView={3}
					breakpoints={swiperBreakPoints}
				>
					{albums?.map((album) => (
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
