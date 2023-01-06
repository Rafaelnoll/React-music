import styled from "styled-components";

export const SearchBarContainer = styled.div`
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	background-color:#fafafa;
	border-radius:48px;
	margin:16px 0;
`;

export const SearchBarIconBox = styled.div`
	width:40px;
	display:flex;
	align-items:center;
	justify-content:center;
	cursor: pointer;
	font-size:22px;
`;

export const SearchBarInput = styled.input`
	flex:1;
	height:100%;
	padding: 16px 4px;
	border:none;
	background:transparent;
	font-size:16px;
	font-weight:800;
	color:#000;
	border:0;
	&:focus{
		outline:none;
	}

	@media (max-width: 980px){
		font-size:20px;
	}
`;
