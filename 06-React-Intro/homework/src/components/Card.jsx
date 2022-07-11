import React from 'react';

export default function Card({max, min, name, img, onClose}) {   //function Card(props)
  // acá va tu código
  // const {max, min, name, img, onClose} = props
  return (<div>
      <button onClick={onClose}>X</button>
      <div className='title'>
        <h2>{name}</h2>
      </div>
      <div className='temp-img'>
        <p>Min {min}</p>
      </div>
      <div>
        <p>Max {max}</p>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='ciudad'/>
      </div>
  </div>
  
  )
};