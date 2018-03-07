import axios from 'axios';
const API_KEY = "71f00aabbdcb6d87e0d94bf86bc47661";
const ROOT_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//or use this
//const ROOT_url = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url =`${ROOT_url}&q=${city},us`;
	//make ajax request
	const request = axios.get(url);

	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}