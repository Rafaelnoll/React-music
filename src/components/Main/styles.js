import styled from "styled-components";

export const MainContainer = styled.div`
	display:flex;
`;

export const MainContent = styled.div`
	width:100%;
	margin-right:24px;
	padding:8px;

	.top-charts-container{
		display:flex;
	}

	.top-charts{
		flex:1;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
	}

		h2{
			font-size:24px;
			font-weight:700;
			color:#EFEEE0;
			margin-bottom:16px;
		}

`;
