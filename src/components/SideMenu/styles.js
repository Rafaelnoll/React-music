import styled from "styled-components";

export const SideMenuContainer = styled.div`
	width:80px;
	height:100vh;
	padding:16px 0;
	display:flex;
	flex-direction:column;
	align-items:center;

	img{
		width:34px;
		height:34px;
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

	& > .icon{
		width:100%;
	}
`;
