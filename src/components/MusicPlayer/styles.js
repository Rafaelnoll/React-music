import styled from "styled-components";

export const MusicPlayerContainer = styled.div`
	display:flex;
	justify-content:space-between;
	position:fixed;
	width:100%;
	bottom: 0;
	z-index:999;
	background:rgba(16, 16, 16, .9);
	padding:24px 16px;

	@media screen and (max-width:550px) {
		flex-direction:column;
		gap:4px;
	}
`;

export const TrackInfo = styled.div`
	display:flex;
	align-items:center;
	gap:12px;

	img{
		max-width:60px;
		border-radius:12px;
	}

	.track-texts{
		display:flex;
		flex-direction:column;
		width:150px;

		strong{
			color: #fff;
			font-size:14px;
			margin-bottom:4px;
		}

		span{
			font-size:10px;
			color: rgba(255, 255, 255, 0.44);
		}
	}

	@media (max-width: 980px){
		img{
			max-width:80px;
		}

		.track-texts{
			strong{
				font-size:18px;
			}

			span{
				font-size:16px;
			}
		}
	}
`;

export const TrackControls = styled.div`
	flex:.8;
	display:flex;
	align-items:center;
	flex-direction:column;

	.control-buttons{
		display:flex;
		gap: 24px;
		margin-bottom: 24px;

		button{
			display:flex;
			font-size:32px;
			background:transparent;
			border:none;
			color: #fff;
		}

		.play-button{
			color: #FACD66;
		}
	}

	@media (max-width: 980px){
		.control-buttons{
			button{
				font-size:38px;
			}
		}
	}
`;

export const VolumeTrack = styled.div`
	flex:.2;
	display:flex;
	align-items:center;
	gap:8px;

	.volume-icon{
		color: #fff;
		font-size: 20px;
	}

	.volume-bar-box{
		width:100%;
		min-width:40px;
		max-width:150px;
		border-radius: 50px;
	}

	@media (max-width:980px){
		display:none;
	}
`;

export const ProgressBar = styled.div`
		width:80%;
		background: rgba(255, 255, 255, 0.04);
		border-radius: 50px;

		.track-progress-bar{
		width:0%;
		height:8px;
		background: #FACD66;
		border-radius: 50px;
	}
`;

export const VolumeBar = styled.input`
	overflow: hidden;
	height:100%;
  -webkit-appearance: none;
  background-color: rgba(255, 255, 255, 0.04);
	border-radius:12pc;

	&::-webkit-slider-runnable-track{
		height: 10px;
    -webkit-appearance: none;
    color: #FACD66;
    margin-top: -1px;
	}

	&::-webkit-slider-thumb{
		width: 0;
    -webkit-appearance: none;
		height:10px;
    cursor: ew-resize;
    background: transparent;
    box-shadow: -80px 0 0 80px #FACD66;
	}

	/*FF*/
	&::-moz-range-progress {
  	background-color: #FACD66;
		height:100%;
	}

	/* IE*/
	&::-ms-fill-lower {
  	background-color: rgba(255, 255, 255, 0.04);
	}
	&::-ms-fill-upper {
  	background-color: #FACD66;
	}
`;
