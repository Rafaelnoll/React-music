import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Templates/Home";
import { Album } from "./Templates/Album";
import { Collections } from "./Templates/Collections";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import { MusicPlayer } from "./components/MusicPlayer";
import { Page404 } from "./Templates/Page404";
import { Login } from "./Templates/Login";
import { Register } from "./Templates/Register";
import { ModalMessageProvider } from "./contexts/ModalMessageContext";

function App() {

	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<MusicPlayerProvider>
					<Routes>
						<Route path="/album/:id" element={<Album />} />
						<Route path="/collections" element={<Collections />} />
						<Route path="/login" element={<ModalMessageProvider><Login /></ModalMessageProvider>} />
						<Route path="/register" element={<Register />} />
						<Route path="/" element={<Home />} />
						<Route path="/*" element={<Page404 />} />
					</Routes>
					<MusicPlayer />
				</MusicPlayerProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
