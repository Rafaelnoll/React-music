import styled from "styled-components";

export const ChartContainer = styled.div`
	flex:1;
	position:relative;
	background-color:#1A1E1F;
	border-radius:20px;
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding:16px;
	cursor: pointer;
	transition: opacity .1s ease-in;

	img{
		max-width:64px;
		border-radius:12px;
	}

	&:active{
		opacity:0.6;
	}

	@media (max-width:980px) {
		width:100%;
		flex-direction:column;
		align-items:flex-start;

		img{
			max-width:200px;
		}
	}
`;

export const ChartTexts = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	margin: 0 16px;
	color: #fff;

	strong{
		font-size:17px;
		margin-bottom:4px;
	}

	span.artist{
		font-size:12px;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom:8px;
	}

	span.time{
		font-size:12px;
	}

	@media (max-width:980px) {
		margin: 16px 0;

		strong{
			font-size:24px;
		}

		span.artist{
		font-size:20px;
	}

	span.time{
		font-size:18px;
	}
	}
`;

export const ChartLikeButton = styled.button`
	display:flex;
	justify-content:center;
	align-items:center;
	border: 1px solid rgba(255, 255, 255, 0.11);
	font-size:18px;
	color:#FACD66;
	border-radius:50%;
	padding:8px;
	background:transparent;

	@media (max-width:980px) {
		& {
			position:absolute;
			top:10;
			right:20px;
			font-size:28px;
		}
	}
`;
