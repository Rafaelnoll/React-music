import styled from "styled-components";

export const AlbumTemplate = styled.div`
	background-image:
	linear-gradient(180deg, rgba(29, 33, 35, .3) 0%, #1D2123 50%),
	url(${({ backgroundImage }) => backgroundImage});
	background-repeat:no-repeat;
	background-size:cover;
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
			color:#fff;
			font-size:40px;
			font-weight:700;
			text-align:center;
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

		span{
			font-size:22px;
		}
		}
	}
`;
