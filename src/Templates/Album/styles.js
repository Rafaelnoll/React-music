import styled from "styled-components";

export const AlbumTemplate = styled.div`
	background-image:
	linear-gradient(180deg, rgba(29, 33, 35, .3) 0%, #1D2123 50%),
	url(https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef);
	background-repeat:no-repeat;
	background-size:cover;
`;

export const AlbumContent = styled.div`

`;

export const AlbumTemplateHeader = styled.div`
	display:flex;
	margin-top:32px;

	.image-box{
		margin-right:32px;

		img{
			max-width:300px;
			border-radius:32px;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		}

	}

	.text-box{
		color:#EFEEE0;
		display:flex;
		flex-direction:column;
		justify-content:flex-end;
		gap:8px;
		max-width:600px;

		h1{
			color:#A4C7C6;
			font-size:40px;
			font-weight:700;
		}
	}

	@media (max-width:980px) {
		flex-direction:column;
		align-items:center;
		justify-content:center;
		padding:0 8px;

		.image-box{
			display:flex;
			justify-content:center;
			margin:0;

			img{
				max-width:100%;
			}
		}

		.text-box{
		max-width:100%;
		}
	}
`;

export const ActionButtons = styled.div`
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
		}
	}

	@media (max-width:550px){
		flex-wrap:wrap;
		gap:16px;
	}
`;

