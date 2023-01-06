import styled from "styled-components";

export const Page404Container = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	width:100%;
	height:100%;
	margin-bottom:120px;

	@media screen and (max-width: 550px) {
		margin-bottom:180px;
	}

	strong{
		font-size: 96px;
		color: #FACD66;

		span{
			color:#A4C7C6;
			font-size:96px;
		}
	}

	i{
		font-size: 40px;
		color:#A4C7C6;
		text-align:center;
	}

`;
