import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="card">
        <div className="card-body">
            <img src={props.img} class='card-image' alt=''/>
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.descripcion}</p>
            <ul>
              <li className='card-title'>{props.text}</li>
              <li className='card-text'>{props.text1}</li>
              <li className='card-text'>{props.text2}</li>
              <li className='card-text'>{props.text3}</li>
              <li className='card-text'>{props.text4}</li> 
              <li className='card-title'>{props.modulo}</li>
              <li className='card-text'>{props.modulo1}</li>
              <li className='card-text'>{props.modulo2}</li>
              <li className='card-text'>{props.modulo3}</li>
              <li className='card-text'>{props.modulo4}</li>
              <li className='card-text'>{props.modulo5}</li>
              <li className='card-title'>{props.info}</li>
              <li className='card-text'>{props.info1}</li>
              <li className='card-title'>{props.info_h}</li>
              <li className='card-text'>{props.info2}</li>
          
            </ul>
            
        </div>
    </div>
  )
}

export default Card