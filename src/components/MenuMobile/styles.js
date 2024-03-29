import styled from "styled-components";

export const MobileContainer = styled.div`
	z-index:999;
	@media (min-width: 980px){
			display:none;
	}
`;

export const MobileButton = styled.button`
	display:flex;
	justify-content:center;
	align-items:center;
	background:transparent;
	color: #fff;
	border:none;
	font-size:32px;
`;

export const MobileMenu = styled.div`
	position:fixed;
	background-color:#1A1E1F;
	width:100%;
	height:100vh;
	left:0;
	top:0;
	padding:16px;

	header{
		display:flex;
		justify-content:end;
	}

	.close-button{
		cursor: pointer;
		font-size: 32px;
		color: #fff;
	}

	.mobile-nav{
		display:flex;
		flex-direction:column;
		font-size:32px;
		gap: 16px;
		margin-top:16px;

		a,.logout-button-mobile{
			display:flex;
			align-items:center;
			text-decoration:none;
			color:#fafafa;
			padding:5px;
			cursor: pointer;
		}

		.icon{
			margin-right:16px;
		}
	}

`;
