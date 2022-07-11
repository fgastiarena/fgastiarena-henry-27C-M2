import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Cards from "./components/Cards";
import data, { Cairns } from "./data.js";
import styles from "./styles/Cards.module.css";

export default function App() {
  const [cities, setCities] = useState([]);
  const apikey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }


  // const onSearch = (city) => {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  //   )
  //     .then((r) => r.json())
  //     .then((recurso) => {
  //       if (recurso.main !== undefined) {
  //         const ciudad = {
  //           min: Math.round(recurso.main.temp_min),
  //           max: Math.round(recurso.main.temp_max),
  //           img: recurso.weather[0].icon,
  //           id: recurso.id,
  //           wind: recurso.wind.speed,
  //           temp: recurso.main.temp,
  //           name: recurso.name,
  //           weather: recurso.weather[0].main,
  //           clouds: recurso.clouds.all,
  //           latitud: recurso.coord.lat,
  //           longitud: recurso.coord.lon,
  //         };
  //         setCities((oldCities) => [...oldCities, ciudad]);
  //       } else {
  //         alert("Ciudad no encontrada");
  //       }
  //     });
  // };

  function onClose(cityId) {
    setCities(oldCities  => oldCities.filter(c => c.cityId != cityId));
  };

  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch} />

      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>

      {/* <div className={styles.mainCity}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div> */}
    </div>
  );
}
