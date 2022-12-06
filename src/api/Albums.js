/* eslint-disable no-undef */
import api from "./api.js";

const spotifyDatabaseId = process.env.SPOTIFYDATABASEID;

class Albums {

	static async getAll() {
		try {

			const response = await api.get("user_profile/", {
				params: {
					id: spotifyDatabaseId,
				}
			});
			const albums = response.data;
			console.log(albums);
			return albums;

		} catch (error) {
			console.log(error);
			return null;
		}
	}

	static async getOnly(number = 1) {
		try {
			const response = await api.get("user_profile/", {
				params: {
					id: spotifyDatabaseId,
					playlistLimit: number,
				}
			});
			const albums = response.data.public_playlists;
			console.log(albums);
			return albums;

		} catch (error) {
			console.log(error);
			return null;
		}
	}

}

export default Albums;
