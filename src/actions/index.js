import axios from 'axios'

// const API_KEY = 'c4ec42bafbd4a55819f9b04cf973b821' // Default
const API_KEY = 'ed50d3cc9cfb3b7362a00c7813d16d82' // Dumbravita

// const DIRECT_ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Dumbravita,ro&id=524901&APPID=ed50d3cc9cfb3b7362a00c7813d16d82'
const DIRECT_ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ed50d3cc9cfb3b7362a00c7813d16d82&q=Dumbravita,ro'
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID='
const ROOT_URL_AND_API = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`
const BINDER = '&q=?'
const UNITS = '&units=metric'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (cityName, country) {
  const url1 = `${ROOT_URL_AND_API}&q=?${cityName},${country}${UNITS}`
  const url2 = `${ROOT_URL}${API_KEY}${BINDER}${cityName},${country}${UNITS}`

  const web_request1 = axios.get(url1)
  const web_request2 = axios.get(url2)

  return {
    type: 'FETCH_WEATHER',
    payload: { web_request1, web_request2 }
  }
}
