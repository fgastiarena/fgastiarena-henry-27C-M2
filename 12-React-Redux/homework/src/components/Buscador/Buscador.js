import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies} from '../../actions/index';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });  // es un component de clase que tiene un state, que tiene una fn handlechange que recibe un evento y cambia la prop title de mi state con lo que sea que se está escribiendo
  }
  handleSubmit(event) {
    event.preventDefault();
    //despacho la action y para esto tengo que acceder a las props y estoy en un component de clases
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        {/* ejecuta el submit recien cuando el form sea submiteado */}
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}> 
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {/* el ? se preg si la prop existe antes de hacer el map, si es null o undef evita errores */}
          {/* elmap recibe cada una de las pelis, por cada peli quiero que me devuelva una estructura HTML, le ponemos un key porque necesito un valor único de cada peli. */}
          {this.props.movies?.map(m => 
            <div key={m.imdbID}> 
              <Link to={`/movie/${m.imdbID}`}> {/*Acá adentro quiero mostrar el título de las pelis*/}
                <li>{m.Title}</li>  {/*con mayus pq así viene de la api*/}
              </Link>
              <button onClick={() => this.props.addMovieFavorite({title: module.Title, id: m.imdbID})}> {/*Necesito agregarle un onClick pq cuando lo toque quiero qiue la peli se agregue a favs*/}
                FAV
              </button>
            </div>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {   // toma el state de redux, me guarda en el component una prop que se llama movies en este caso que es igual a la parte movieLoaded
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) { //recibe el dispatch y me guarda en la props de mi component una prop que se llama addmoviefav que recibe un parametro (movie) y me va a hacer una dispatch de esa action (addmoviefav) con ese parametro que recibió. 
  return { // lo mismo con getMovies, me guarda un prop de mi componente que tmb recibe un parametro y cuando la ejecute pasandole un paramet, va a hacer un dispatch de de getMovies con ese param. 
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))  //al dispatch siempre le paso una action, en este caso le paso un actionCreation
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

