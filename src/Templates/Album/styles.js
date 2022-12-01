import styled from "styled-components";

export const AlbumTemplate = styled.div`
	background-image:
	linear-gradient(180deg, rgba(29, 33, 35, 0) 0%, #1D2123 70%),
	linear-gradient(180deg, rgba(29, 33, 35, .3) 70%, #1D2123 100%),
	${({ backgroundImage }) => `url(${backgroundImage})`};
	background-repeat:no-repeat;
	background-size:cover;
	background-position: 50% 250%;
`;
