import styled from "styled-components";

export const SearchBarAlbumContainer = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	color:#fff;
	font-size: 16px;
	padding:8px 12px;
	gap:24px;
	cursor: pointer;

	img{
		max-width:56px;
		border-radius: 16px;
	}

	&:hover{
		transform: scale(1.01);
		background-color:black;
	}

	&:active{
		opacity:0.6;
	}
`;

export const SearchBarAlbumTexts = styled.div`
	width:100%;
`;
