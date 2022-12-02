import { CollectionCard } from "../../components/CollectionCard";
import { Main } from "../../components/Main";
import { CategoriesContainer, CollectionCards, CollectionsTemplate } from "./styles";

export function Collections() {
	return (
		<CollectionsTemplate>
			<Main>
				<CategoriesContainer>
					<button>My collection</button>
					<button>Likes</button>
				</CategoriesContainer>
				<CollectionCards>
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
					<CollectionCard />
				</CollectionCards>
			</Main>
		</CollectionsTemplate>
	);
}
