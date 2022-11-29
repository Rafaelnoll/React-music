import styled from "styled-components";

export const SideMenuContainer = styled.div`
	height:100vh;
	padding:16px;
	display:flex;
	flex-direction:column;
	align-items:center;

	@media (max-width: 980px){
		height:100%;
		justify-content:space-between;
		flex-direction:row;
	}
`;

export const NavMenuContainer = styled.div`
	background: #1A1E1F;
	border-radius: 32px;
	padding: 24px 16px;
	width:60px;
	margin-top: 24px;
	display:flex;
	flex-direction:column;
	align-items:center;
	gap:31px;

	.icon{
		font-size:22px;
	}

	@media (max-width: 980px){
			display:none;
	}
`;

/* Mobile Styles*/
export const MobileContainer = styled.div`

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
	position:absolute;
	background-color:#1A1E1F;
	width:100vw;
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

		a{
			display:flex;
			align-items:center;
			text-decoration:none;
			color: rgba(239, 238, 224, 0.25);
			padding:5px;
		}

		.icon{
			margin-right:16px;
		}
	}

`;
