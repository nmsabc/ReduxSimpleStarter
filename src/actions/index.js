import axios from 'axios'

const API_KEY = 'ed50d3cc9cfb3b7362a00c7813d16d82'
const UNITS = '&units=metric'
const REQ = 'http://api.openweathermap.org/data/2.5/forecast?APPID='
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (cityName) {
  const url = `${REQ}${API_KEY}&q=${cityName}${UNITS}`
  const webRequest = axios.get(url)
  return {
    type: 'FETCH_WEATHER',
    payload: webRequest // dupa 3 ore bune de cautare aici aveam { webReuest } in loc de webReuest LOL
  }
}
