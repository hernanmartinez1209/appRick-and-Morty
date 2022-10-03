import axios from 'axios'
import React, { useEffect, useState } from 'react'
import stylesCard from'./styles/stylesCard.css'

const CardResident = ({url}) => {
    //Hacer una petición a la API
    const [resident, setResident] = useState()

    useEffect(() => {
      axios.get(url)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])
    


  return (
    <article className='card__resident'>
        <header className='card__header'>
            <img className='card__img' src={resident?.image} alt="" />
            <div className='card__status'>
                <span className='status_resident'>{resident?.status}</span>
            </div>
                <div className={`circle ${resident?.status}`}></div>
                
        </header> 
  
        <section className='card__info'>
            <h3 className='card__name'>{resident?.name}</h3>   
            <ul className='card__descripcion'>
 
                <span className='card_title_info'>Specie</span><li className='cart__descripcion_list' >{resident?.species}</li>
                <span className='card_title_info'>Origin</span><li className='cart__descripcion_list' >{resident?.origin.name}</li>
                <span className='card_title_info'>Episodes where appear</span><li className='cart__descripcion_list' >{resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default CardResident