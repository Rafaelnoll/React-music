import { TopCharts } from "../../components/TopCharts";
import { AlbumsCarrossel } from "../../components/AlbumsCarrossel";
import { Main } from "../../components/Main";

export function Home() {
	return (
		<Main>
			<TopCharts />
			<AlbumsCarrossel label="Albums" />
		</Main>
	);
}
