import styled from "styled-components";

export const AlbumCardContainer = styled.div`
	display:flex;
	flex-direction:column;
	max-width: 180px;
	gap:5px;
	cursor: pointer;
	transition: opacity .1s ease-in;

	img{
		border-radius:24px;
	}

	&:active{
		opacity:0.6;
	}

	strong{
		color:#fff;
		font-size:12px;
	}

	span{
		color: rgba(255, 255, 255, 0.3);
		font-size: 12px;
	}

	@media (max-width: 980px){
		strong{
			font-size:20px;
		}
	}
`;
