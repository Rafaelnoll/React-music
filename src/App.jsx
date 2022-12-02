import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Templates/Home";
import { Album } from "./Templates/Album";
import { Collections } from "./Templates/Collections";

function App() {

	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/album" element={<Album />} />
					<Route path="/collections" element={<Collections />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
