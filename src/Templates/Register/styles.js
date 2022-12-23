import styled from "styled-components";

export const FormContainer = styled.div`
	max-width:600px;
	margin:0 auto;
	background-color:rgba(51, 55, 59, 0.37);;
	border-radius:24px;
	padding:16px;

	display:flex;
	flex-direction:column;
	justify-content:center;

	.image-box{
		width:100%;
		display:flex;
		justify-content:center;
		margin:16px 0;

		img{
			min-width:150px;
			max-width:200px;
		}
	}

	strong{
		color: #fff;
		font-size: 32px;
		text-transform:uppercase;
		text-align:center;
		margin-bottom:16px;
	}

	form{
		display:flex;
		flex-direction:column;
		margin-top:16px;

		label{
			color:#fff;
			font-size:20px;
			margin-bottom:4px;
		}

		input{
			background-color:#1A1E1F;
			border:none;
			padding: 16px;
			border-radius:8px;
			color:#fff;
			font-size:16px;
			margin-bottom:16px;
		}

		button{
			font-size:20px;
			text-transform:uppercase;
			background-color:#FACD66;
			border-radius:8px;
			border:none;
			padding: 8px 16px;
			color: #fff;
			margin-top:8px;
		}
	}

	.form-message{
		margin-top:16px;
		text-align:center;
	}

	.form-message.error{
		color: #B33030;
	}

	.form-message.success{
		color: #2EB086;
	}

`;
