import styled from "styled-components";

export const CollectionCardContainer = styled.div`
	position:relative;
	background-image:${({ backgroundImage }) => `url(${backgroundImage})`};
	background-repeat:no-repeat;
	background-size:cover;
	width:250px;
	height:250px;
	display:flex;
	flex-direction:column;
	justify-content:end;
	margin-top:24px;
	border-radius:24px;
	color:#EFEEE0;
	padding:22px;

	strong{
		font-size:24px;
		text-shadow: 1px 1px black;
	}

	.artist-name{
		font-size:12px;
		opacity:0.75;
	}

	.number-of-likes{
		margin-top:22px;
		color: #fff;
		font-size:12px;
	}

	button{
		position:absolute;
		color:#FACD66;
		font-size:48px;
		background:transparent;
		border:none;
		right:20px;
		bottom:32px;
	}

	@media screen and (max-width:550px) {
		min-width:100%;
	}
`;
