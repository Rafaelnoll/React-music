import { CollectionCardsList } from "../../components/CollectionCardsList";
import { Main } from "../../components/Main";
import { CategoriesContainer, CollectionsTemplate } from "./styles";

export function Collections() {
	return (
		<CollectionsTemplate>
			<Main>
				<CategoriesContainer>
					<button>My collection</button>
					<button>Likes</button>
				</CategoriesContainer>
				<CollectionCardsList />
			</Main>
		</CollectionsTemplate>
	);
}
