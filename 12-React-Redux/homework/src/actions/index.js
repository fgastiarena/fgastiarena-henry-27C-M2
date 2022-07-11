import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from './types';

const apikey = '9ff739c7';

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIES, payload: json });
            });
    };
}


export function removeMovieFavorite(id) { // esta me sirve para sacar del reducer una peli
    return { type: REMOVE_MOVIE_FAVORITE, payload: id } //su info extra puede llamarse como quiere. le ponemos id para identificar que es y payload por convencion de los segundos argumentos 
}


export function getMovieDetail(idMovie) { // acá ya nos daban una url para obtener una peli.
    // return { type: GET_MOVIE_DETAIL, payload }  //no retorna un obj, retorna una fn
    return function(dispatch) { // el dispatch me lo pasa redux autom, me va a servir para ir a  buscar algo y despues despachar alguna accion con esa data
        fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`) // usamos fetch ya que necesitamos una rta del servidor
            .then(response => response.json())
            .then(data => {
                dispatch({ type: GET_MOVIE_DETAIL, payload: data }) //su info extra para que el reducer se encargue de ver q hace con esa info es el payload va a ser ese obj con los detalles de una peli que ya obtube de una api que ya lo pase a obj JS y ahora se lo mando al reducer 
            });
    }
}