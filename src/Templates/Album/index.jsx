import { Main } from "../../components/Main";
import { MusicsList } from "../../components/MusicsList";
import {
	AlbumContent,
	AlbumTemplate,
	AlbumTemplateHeader,
	ActionButtons
} from "./styles";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsMusicPlayer } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const testImage = "https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef";

export function Album() {
	return (
		<AlbumTemplate backgroundImage={testImage}>
			<Main>
				<AlbumContent>
					<AlbumTemplateHeader>
						<div className="image-box">
							<img src={testImage} />
						</div>
						<div className="text-box">
							<h1>Tommow tunes</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
							<span>64 songs - 16 hrs+</span>
							<ActionButtons>
								<button><AiFillPlayCircle className="icon" /> Play all</button>
								<button><BsMusicPlayer className="icon" /> Add to collection</button>
								<button><AiOutlineHeart className="icon-red" /></button>
							</ActionButtons>
						</div>
					</AlbumTemplateHeader>
					<MusicsList />
				</AlbumContent>
			</Main>
		</AlbumTemplate>
	);
}
