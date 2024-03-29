import styled from "styled-components";

export const CollectionsTemplate = styled.div`
	margin-bottom:150px;

	@media screen and (max-width: 550px) {
		margin-bottom:220px;
	}
`;

export const CategoriesContainer = styled.div`
	display:flex;
	gap:12px;

	button{
		color:#EFEEE0;
		background:transparent;
		border: 1px solid #EFEEE0;
		border-radius:32px;
		padding:12px;
		opacity: 0.25;
	}
`;


