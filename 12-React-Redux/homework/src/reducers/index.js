import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from '../actions/types';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {} // un obj vacío que va a ser el detalle de alguna peli. 
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { //se trae el state y en el array moviesLoad se guarda action.payload.Search, que ese search viene de la rta de la api que fue un json, un obj que tiene Search(array de pelis), totalResult y no se que más
                ...state,
                moviesLoaded: action.payload.Search
            };
        case ADD_MOVIE_FAVORITE: // retorna un nuevo state y en la prop moviefav le contatena el action.payload al array que ya tenía. 
            return { // es como hacer moviesFavorite: [...state.moviesFav, action.payload]
                ...state,
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            };
        case GET_MOVIE_DETAIL: // buscamos el detail de la peli, volvemos a retornar el state anterior
            return { //en mi nuevo state quiero que movieDetail quiero tener de a 1 peli, porque después en la pantalla voy a ver de a una. Así que podemos ir pisando los datos.
                ...state,
                movieDetail: action.payload // hago action.payload porque el payload es lo que me devolvió la api. y cuando hago una request del tipo get del detalle de una peli por su id, me trae un obj con toda la info de esa peli, y eso es lo que quiero ir pisando despues. 
            };
        case REMOVE_MOVIE_FAVORITE:
            return { //por lo que sabemos voy a tener varias pelis en las fav y voy a tener que sacar una peli. 
                ...state, //retorno la copia de mi state y filtro las pelis que quiero que pasen
                moviesFavourites: state.moviesFavourites.filter(m => m.id !== action.payload) // de todas las pelis, dejamos pasar aquellas cuyo id sea diferente al que me vino en el payload de la action, es decir pasan todas menos las del id que quiero borrar.                   
            };
        default:
            return state;

    }
}