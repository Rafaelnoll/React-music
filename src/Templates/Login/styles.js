import styled from "styled-components";

export const FormContainer = styled.div`
	position:relative;
	max-width:600px;
	margin:0 auto 150px;
	background-color:rgba(51, 55, 59, 0.37);;
	border-radius:24px;
	padding:16px;

	display:flex;
	flex-direction:column;
	justify-content:center;

	margin-bottom:120px;

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

	@media screen and (max-width: 550px) {
		margin-bottom:220px;
	}
`;

export const MessageFromRegister = styled.div`
	display:flex;
	flex-direction:column;
	position:absolute;
	background-color:#fff;
	bottom: 24px;
	border-radius:5px 5px 4px 4px;
	opacity:0;
	animation: show 1.5s forwards;

	.message-content{
		padding: 16px 16px 0 16px;
		font-weight:bold;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;

		.message-icon{
			font-size:32px;
			color:#2EB086;
		}

		.message-icon.error{
			color:red;
		}
	}

	.timer-bar{
		width:100%;
		height:8px;
		background-color: #2EB086;
		animation: timer-animation 4s forwards;
		border-bottom-left-radius:4px;
	}

	.timer-bar.error{
		background-color:red;
	}

	@keyframes show {
		to{
			opacity:1;
		}
	}

	@keyframes timer-animation {
		to{
			width:0%;
		}
	}
`;
