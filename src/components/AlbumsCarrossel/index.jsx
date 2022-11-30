import { AlbumCard } from "../AlbumCard";
import { AlbumsContainer } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import P from "prop-types";
import "swiper/css";
import AlbumImage from "../../assets/imgs/albumImage.svg";

const albums = [
	{
		id: 4213654,
		image: AlbumImage,
		name: "Life in a bubble",
		artist: "The van"
	},
	{
		id: 42133654,
		image: AlbumImage,
		name: "Life in a bubble",
		artist: "The van"
	},
	{
		id: 3413654,
		image: AlbumImage,
		name: "Life in a bubble",
		artist: "The van"
	},
	{
		id: 13654,
		image: AlbumImage,
		name: "Life in a bubble",
		artist: "The van"
	},
	{
		id: 4213,
		image: AlbumImage,
		name: "Life in a bubble",
		artist: "The van"
	},
	{
		id: 454,
		image: AlbumImage,
		name: "Life in a bubble",
		artist: "The van"
	},
];

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
	return (
		<>
			<AlbumsContainer>
				<h2>{label}</h2>
				<Swiper
					slidesPerView={3}
					breakpoints={swiperBreakPoints}
				>
					{albums.map(album => (
						<SwiperSlide key={album.id}>
							<AlbumCard
								albumImage={album.image}
								name={album.name}
								artist={album.artist}
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
