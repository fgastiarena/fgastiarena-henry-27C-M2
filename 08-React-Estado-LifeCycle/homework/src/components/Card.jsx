import React from "react";
import styles from "../styles/Card.module.css"; // el styles puede ser un nombre cualquiera. Lo defino cuando hago el import

export default function Card({ max, min, name, img, onClose }) {
  //function Card(props)
  // acá va tu código
  // const {max, min, name, img, onClose} = props
  return (
    <div className={styles.mainDiv}>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
      <h2 className={styles.title}>{name}</h2>
      <span className={styles.datos}>
        <div>
          <p>Min {min}</p>
        </div>
        <div>
          <p>Max {max}</p>
        </div>
        <div>
          <img
            className="imgClima"
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="ciudad"
          />
        </div>
      </span>
    </div>
  );
}
