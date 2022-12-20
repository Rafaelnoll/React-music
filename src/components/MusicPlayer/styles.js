import styled from "styled-components";

export const MusicPlayerContainer = styled.div`
	display:flex;
	justify-content:space-between;
	position:fixed;
	width:100%;
	bottom: 0;
	z-index:999;
	background:rgba(16, 16, 16, 0.8);
	padding:24px 16px;
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

	.progress-bar-box{
		width:80%;
		background: rgba(255, 255, 255, 0.04);
		border-radius: 50px;
	}

	.progress-bar{
		width:50%;
		height:8px;
		background: #FACD66;
		border-radius: 50px;
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
		background: rgba(255, 255, 255, 0.04);
		border-radius: 50px;
	}

	.volume-bar{
		width:80%;
		height:4px;
		background: #FACD66;
		border-radius: 50px;
	}
`;
