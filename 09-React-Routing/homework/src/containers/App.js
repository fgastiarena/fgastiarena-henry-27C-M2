import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = 'd2c9f203cee09b57bdbed917cb81f3f8';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
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
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>   {/* // No lo pongo con Route a Nav para que quede fijo y lo muestre todo el tiempo. Si no lo tengo que limitar a un path */}
      
      <Switch>
      <Route path='/'>
        <div>
          <Cards
            cities={cities} 
            onClose={onClose}
          />
        </div>
      </Route>
      <Route path='/about' component={About}/>
      <Route 
          path='/ciudad/:ciudadId'
          render={
            // props:{
            //   match:{
            //     params:{
            //          ciudadId: valor URL
            //     }
            //   }
            // }
            // (props) => <Ciudad/>
            function(props){
              return <Ciudad 
                        city={
                          onFilter(props.match.params.ciudadId)
                        }      //{props.match.params.ciudadId}
                      />
            }
          } 
      >   
      </Route>
      
      </Switch>
    </div>
  );

}

export default App;






{/* <Route path='/' render={() => <Nav onSearch={onSearch}/>}/>
<Route path='/about' component={About}/>
<Route path='/cards' render={() => <Cards cities={cities} onClose={onClose}/>}/> */}
