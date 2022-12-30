import { useState, useEffect } from "react";
import { createContext } from "react";
import P from "prop-types";
import api from "../../api";

export const AlbumsContext = createContext({});

export function AlbumsProvider({ children }) {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		(async () => {
			const albumsResponse = await api.get("/albums");
			const albums = albumsResponse.data;
			setAlbums(albums);
		})();
	}, []);

	return (
		<AlbumsContext.Provider value={{ albums }}>
			{children}
		</AlbumsContext.Provider>
	);
}

AlbumsProvider.propTypes = {
	children: P.node.isRequired,
};
