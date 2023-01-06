import styled from "styled-components";

export const MusicsListContainer = styled.div`
	display:flex;
	flex-direction:column;
	margin:48px 0;
	gap:12px;
	margin-bottom:${({ isMarginActivated }) => isMarginActivated ? "120px": "32px"};

@media screen and (max-width: 550px) {
	margin-bottom:${({ isMarginActivated }) => isMarginActivated ? "180px": "32px"};
}
`;
