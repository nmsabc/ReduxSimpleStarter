import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Chart from '../components/chart'
// import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name

    // Get temps from cityData then re-map to convert from k to celcius
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273)

    // Get humidities and pressures from cityData
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)

    // ES6 sugar: pulls properties off object of same name
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color='red' units='c' />
        </td>
        <td>
          <Chart data={humidities} color='blue' units='hPa' />
        </td>
        <td>
          <Chart data={pressures} color='green' units='%' />
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (c)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// ES6 sugar: ({ weather }) is from `state` and pulls `state.weather`
// ES6 sugar: `return { weather };` is return { weather: weather }
function mapStateToProps ({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
