import styled from "styled-components";

export const MainContainer = styled.div`
	display:flex;

	@media (max-width: 980px){
		& {
			flex-direction:column;
		}
	}
`;

export const MainContent = styled.div`
	width:100%;
	margin-right:24px;
	padding:8px;

	.top-charts-container{
		display:flex;
	}

	.charts-list{
		flex:.8;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		gap:16px;
	}

		h2{
			font-size:24px;
			font-weight:700;
			color:#EFEEE0;
			margin-bottom:16px;
		}

@media (max-width: 980px){
	.top-charts-container{
		flex-direction:column;
	}

	.top-charts{
		margin-top:46px;
	}
}

`;

export const MobileContainer = styled.div`
	background-color:red;
`;
