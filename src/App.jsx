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
import { ProfilePage } from "./Templates/ProfilePage";
import { ModalMessageProvider } from "./contexts/ModalMessageContext";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";

function App() {

	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<AuthenticationProvider>
					<MusicPlayerProvider>
						<Routes>
							<Route path="/album/:id" element={<Album />} />
							<Route path="/collections" element={<Collections />} />
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<ModalMessageProvider><Login /></ModalMessageProvider>} />
							<Route path="/profile" element={<ProfilePage />} />
							<Route path="/" element={<Home />} />
							<Route path="/*" element={<Page404 />} />
						</Routes>
						<MusicPlayer />
					</MusicPlayerProvider>
				</AuthenticationProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
