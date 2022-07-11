import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';    //recibe un idMovie como arg

import './Movie.css';

class Movie extends React.Component {

//this.props.match.params.id => id es el nombre que le pusieron a la url en la app.js
//ciclos de vida de un componente
    componentDidMount(){  //este era el ciclo que me servía para cuando el componente se monte
        this.props.getMovieDetail(this.props.match.params.id) //cuando el component se monte quiero despachar la action
    }  //recibe el valor que lo obtenemos con el id que lo obteniamos de la url

    render() {
        return (
            <div className="movie-detail">
                <h2>{this.props.movie.Title}</h2>  {/*quiero acceder al titulo de esa peli*/}
                <p>{this.props.movie.Genre}</p>
                {/* <h4>Poster: <img src={this.props.movies.Poster} alt=''/></h4> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {   //recibe el state y quiero que me guarde una prop en mi component que la voy a llamar movie
    return {
        movie: state.movieDetail   //me interesa la parte que me guarda el detail de las movies
    }
}

export default connect(mapStateToProps, {getMovieDetail})(Movie);