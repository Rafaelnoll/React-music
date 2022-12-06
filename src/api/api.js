/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const apiKey = process.env.APIKEY;
const apiHost = process.env.APIHOST;
const apiURL = process.env.APIURL;

const api = axios.create({
	baseURL: apiURL,
	headers: {
		"X-RapidAPI-Key": apiKey,
		"X-RapidAPI-Host": apiHost,
	}
});

export default api;
