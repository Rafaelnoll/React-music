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
	overflow:hidden;
`;
