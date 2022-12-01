import styled from "styled-components";

export const MusicCardContainer = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:center;
	color:#fff;
	background: rgba(51, 55, 59, 0.5);
	backdrop-filter: blur(5px);
	font-size: 16px;
	border-radius: 16px;
	padding:8px 12px;
	gap:24px;

	img{
		max-width:56px;
		border-radius: 16px;
	}

	.like-button{
		font-size:3em;
		cursor: pointer;
	}
`;

export const MusicCardTexts = styled.div`
	display:flex;
	justify-content:space-around;
	width:100%;
`;

export const MusicCardOptions = styled.div`
	width:100%;
	display:flex;
	justify-content:space-around;

	.option-button{
		color:#FACD66;
		cursor: pointer;
	}
`;
