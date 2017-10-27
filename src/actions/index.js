import axios from 'axios'

// const API_KEY = 'ed50d3cc9cfb3b7362a00c7813d16d82' // Dumbravita

const REQ = 'http://api.openweathermap.org/data/2.5/forecast?APPID=ed50d3cc9cfb3b7362a00c7813d16d82&id=678689&units=metric'
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (cityName, country) {
  console.log('we are fetching: ', cityName, country)

  const url = `${REQ}&q=${cityName},RO`

  const webRequest = axios.get(url)

  console.log('web_Request is: ', url)

  return {
    type: 'FETCH_WEATHER',
    payload: { webRequest }
  }
}
