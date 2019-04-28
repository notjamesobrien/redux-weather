import React from 'react'
import moment from 'moment'
import Loader from '../loader/Loader'

const CurrentWeather = props => {
  const current = props.data.current,
        location = props.data.location
  if (current && location) {
    return (
      <section className='current-weather animate__fade-in'>
        <div className='current-weather__top-bar'>
          <div className='current-weather_icon'>
            <img src={`http:${current.condition.icon}`}
                 alt={current.condition.text} />
          </div>
          <div className='current-weather__datetime'>
            <p>{moment.unix(location.localtime_epoch).format('h:mmA')}</p>
            <p>{moment.unix(location.localtime_epoch).format('LL')}</p>
          </div>
        </div>
        <div className='current-weather__temps'>
          {current.temp_f}˚F
          <span>
            {current.temp_c}˚C
          </span>
        </div>
      </section>
    )
  } else {
    return <Loader />
  }
}

export default CurrentWeather
