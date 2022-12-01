import styled from "styled-components";

export const TopNavContainer = styled.div`
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	`;

export const SearchIconBox = styled.div`
	width:40px;
	display:flex;
	align-items:center;
	justify-content:center;
	cursor: pointer;
	font-size:22px;
	`;

export const TopNavInput = styled.input`
	flex:1;
	height:100%;
	padding: 26px 4px;
	border:none;
	background:transparent;
	font-size:16px;
	font-weight:800;
	color:white;
	border:0;
	&:focus{
		outline:none;
	}
`;
