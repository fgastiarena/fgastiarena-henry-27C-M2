import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";


export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies?.map(m => 
            <div key={m.id}>
              <li><Link to={`/movie/${m.id}`}>{m.Title}</Link>
              <button onClick={() => this.props.removeMovieFavorite(m.id)}>X</button></li> {/*Al onClick le paso la action que sabe remover el valor, y a ese action le paso un param que es el id de la peli, por eso la pongo en un arrow*/}
            </div>)}  {/*de nuevo el ? pq es un array, no es un ternario, solo comprueba si hay algo.*/}
        </ul>
      </div>
    );
  }
}

//Queremos despachar una accion que elimine los favs
//vamos a hacer el connect

  const mapStateToProps = (state) => {
    return {   
      movies: state.moviesFavourites
    }
  }



export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);  {/*ya tengo la prop removeMovieFav que va a hacer el dispatch de esa action cuando sea necesario c*/}
