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
	cursor: pointer;

	img{
		max-width:56px;
		border-radius: 16px;
	}

	.like-button{
		font-size:3em;
		cursor: pointer;
	}

	@media (max-width:980px){
		.like-button{
			display:none;
		}
	}
`;

export const MusicCardTexts = styled.div`
	display:flex;
	justify-content:space-between;
	width:100%;
	margin-right:40px;

	@media (max-width:980px){
		flex-direction:column;
		gap:8px;
		align-items:flex-start;
		margin:0;
	}
`;

export const MusicCardOptions = styled.div`
	width:100%;
	display:flex;
	justify-content:space-between;

	.option-button{
		color:#FACD66;
		cursor: pointer;
	}

	@media (max-width:980px){
		flex-direction:column-reverse;
		gap:8px;
		align-items:flex-end;
	}
`;
