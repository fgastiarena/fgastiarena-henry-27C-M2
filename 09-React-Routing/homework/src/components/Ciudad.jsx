import React from 'react';

export default function Ciudad({city}) {
    return (
        
        <div className="ciudad">
            
                city ?
                
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                    :
                    <div>
                        No se encontró la ciudad
                    </div>
                </div>
                
            
        </div>
    )
}
