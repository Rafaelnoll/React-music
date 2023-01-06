import axios from "axios";

const api = axios.create({
	baseURL: "https://react-music-api-production.up.railway.app",
});

export default api;
