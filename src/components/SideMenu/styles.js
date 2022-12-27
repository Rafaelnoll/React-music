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
	gap:32px;

	.icon{
		font-size:22px;
		cursor: pointer;
	}

	@media (max-width: 980px){
			display:none;
	}
`;
