import React from "react";
import cities from "../data";
import Card from "./Card";
import styles from "../styles/Cards.module.css";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  // cities={data}

  if (!cities || cities.length === 0) {
    return <div>Cargando...</div>;
  }
  
  // cities && 
  // cities.length &&
  return (
    <div className={styles.containerClass}>

      {props.cities.map(city =>
     <Card
       max={city.main.temp_max}
       min={city.main.temp_min}
       name={city.name}
       img={city.weather[0].icon}
       onClose={() => alert(city.name)}
       key={city.id}
     />
     )}

    </div>
  );
}
