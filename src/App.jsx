import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Templates/Home";
import { Album } from "./Templates/Album";
import { Collections } from "./Templates/Collections";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import { MusicPlayer } from "./components/MusicPlayer";

function App() {

	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<MusicPlayerProvider>
					<Routes>
						<Route path="/album/:id" element={<Album />} />
						<Route path="/collections" element={<Collections />} />
						<Route path="/" element={<Home />} />
					</Routes>
					<MusicPlayer />
				</MusicPlayerProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
