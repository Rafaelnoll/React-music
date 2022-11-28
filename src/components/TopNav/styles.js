import styled from "styled-components";

export const TopNavContainer = styled.div`
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	background-color:#1D2123;
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
	background-color:#1D2123;
	font-size:16px;
	color:white;
	border:0;
	&:focus{
		outline:none;
	}
`;
