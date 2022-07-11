import React from "react";
// import cities from "../data";
import Card from "./Card.jsx";
import styles from "../styles/Cards.module.css";

export default function Cards({cities, onClose}) {     // cities es un arr que va a ser mapeado y viene de app.js
  // acá va tu código
  // tip, podés usar un map
  // cities={data}

  if(cities ? (Array.isArray(cities) ? cities.length: false) : false) {
    return (

      <div className={styles.containerClass}> 
        {cities.map(city =>
       <Card
         max={city.max}
         min={city.min}
         name={city.name}
         img={city.img}  //cities.weather[0].icon
         onClose={() => onClose(city.id)} //prototype.ciudad.onClose = (c.id)
         key={city.id}
       />
       )}  
      </div>
      
    );

  }
  else return null;
  
  // cities && 
  // cities.length &&
}
