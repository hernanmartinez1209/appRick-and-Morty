import React from 'react'
import stylesFilterCard from './styles/stylesFilterCard.css'
const FilterList = ({suggestedList, setSearchInput}) => {

    const handleClick = id => setSearchInput(id)

  return (
    <ul className='filter__card'>
        {
            suggestedList?.map(location => (
                <li className='list__filter' onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
            ))
        }
    </ul>
  )
}

export default FilterList