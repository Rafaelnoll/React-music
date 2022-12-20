import api from "../api";

export async function getAlbum(id) {
	const response = await api.get(`/albums/${id}`);
	return response.data;
}

