import styled from "styled-components";

export const UserInfosContainer = styled.div`
	max-width:800px;
	margin:0 auto;
	background-color:rgba(51, 55, 59, 0.37);;
	border-radius:24px;
	padding:16px;

	display:flex;
	flex-direction:column;
	justify-content:center;

	strong{
		font-size:24px;
		color:#fff;
		text-align:center;
		margin-bottom:16px;
	}

	.user-infos{
		display:flex;
		flex-direction:column;
		gap:12px;
		font-size: 20px;
		color:#fff;
		margin-bottom:12px;
		word-break:break-all;
	}

	.user-actions{

		button{
			text-transform:uppercase;
			padding:8px;
			background-color:#ba0001;
			border-radius:8px;
			border:none;
			color:#fff;
		}

	}
`;
