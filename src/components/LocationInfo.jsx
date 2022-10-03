import React from 'react'
import stylesLocation from './styles/stylesLocation.css'
const LocationInfo = ({location}) => {
    
  return (
    <article className='location'>
        <div className="card__location">
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='ul__card__location'>
            <span>Type:</span><li>{location?.type}</li>
            <span>Dimension:</span><li>{location?.dimension}</li>
            <span>Population:</span><li>{location?.residents.length}</li>
        </ul>
        </div>
    </article>
  )
}

export default LocationInfo