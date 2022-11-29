import styled from "styled-components";

export const ChartContainer = styled.div`
	background-color:#1A1E1F;
	border-radius:20px;
	display:flex;
	justify-content:space-between;
	align-items:center;
	padding:16px;
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
		color: rgba(255, 255, 255, 0.5);
		margin-bottom:8px;
	}

	span.time{
		font-size:12px;
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
`;