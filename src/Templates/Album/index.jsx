import { Main } from "../../components/Main";
import { AlbumTemplate } from "./styles";
import AlbumImage from "../../assets/imgs/albumImage.svg";

export function Album() {
	return (
		<AlbumTemplate backgroundImage={AlbumImage}>
			<Main>
				<h1>Opa gurizes</h1>
			</Main>
		</AlbumTemplate>
	);
}
