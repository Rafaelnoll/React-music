import styled from "styled-components";

export const LoginAndSignupContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:32px;

strong{
	font-size:32px;
	color: #fff;
	margin-bottom:12px;
	text-align:center;
}

.buttons-container{
	display:flex;
	align-items:center;
	gap: 8px;

	span{
		font-size:20px;
		color: #fff;
	}

	button{
		padding:12px;
		border-radius:8px;
		border:none;
		min-width:80px;
	}

	button.login{
		color:#000;
		background-color:#facd66;
	}
}

	@media (max-width: 980px){
		.buttons-container{

			span{
				font-size:22px;
			}

			button{
				font-size:22px;
			}
		}
	}
`;
