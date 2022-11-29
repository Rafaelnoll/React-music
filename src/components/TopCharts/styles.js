import styled from "styled-components";

export const TopChartContainer = styled.div`
	display:flex;

	.top-charts{
		flex:.8;
	}

	h2{
		font-size:24px;
		font-weight:700;
		color:#EFEEE0;
		margin-bottom:16px;
	}

	@media (max-width: 980px){
		flex-direction:column;

		.top-charts{
			flex:1;
		}
	}
`;

export const ChartsList = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	gap:16px;
`;
