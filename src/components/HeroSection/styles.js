import styled from "styled-components";

export const HeroSectionContainer = styled.div`
	color: #fff;
	background-color:#609EAF;
	border-radius:40px;
	height: 373px;
	padding: 32px 48px;
	display:flex;
	justify-content:space-between;
`;

export const TextsHeroSection = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	height:100%;

	p.likes{
		font-size:14px;
		justify-content:center;
		align-items:center;
	}

	span{
		font-size:12px;
		color: rgba(255,255,255,0.8);
	}

	.text-container{
		max-width:300px;

		strong{
			font-size:35px;
			font-weight:700;
			margin-bottom:6px;
		}

		p{
			color: rgba(255,255,255,0.8);
		}
	}
`;

export const HeroSectionImageContainer = styled.div`
	width:100%;
	position:relative;

	img{
		position:absolute;
		top:-30px;
		right:0px;
	}
`;
