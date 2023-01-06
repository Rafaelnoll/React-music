import styled from "styled-components";

export const AlbumActionButtonsContainer = styled.div`
	margin-top:40px;
	display:flex;
	gap:8px;

	button{
		display:flex;
		justify-content:center;
		align-items:center;
		gap:8px;
		background: rgba(255, 255, 255, 0.07);
		backdrop-filter: blur(5px);
		border:none;
		padding:10px;
		border-radius:32px;
		color: #fff;
		transition: opacity .1s ease-in;

		.icon{
			color:#FACD66;
		}
		.icon-red{
			color:#E5524A;
		}
	}

	button:active{
		opacity:0.6;
	}

	@media (max-width:980px){
		button{
			width:100%;
			font-size:24px;
		}
	}

	@media (max-width:550px){
		flex-wrap:wrap;
		gap:16px;
	}
`;
