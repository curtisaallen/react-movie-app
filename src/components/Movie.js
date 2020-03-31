import React from 'react';
import {MOVIE_DETAILS } from '../config';
import './styles/Movie.css';
import MovieHero from './elements/MovieHero';
import MovieInfoBar from './elements/MovieInfoBar';
import CastThumb from './elements/CastThumb';
import CrewThumb from './elements/CrewThumb';
import Spinner from './elements/Spinner';

class Movie extends React.Component {
    state = {
        movie: null,
        casts: null,
        crew: null,
        directors: [],
        heroImage: null,
        loading: true,
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.fetchItems(MOVIE_DETAILS(this.props.movieId));
    }

    fetchItems = async (endpoint) => {
            const response = await fetch(endpoint);
            const result = await response.json();
            const directors = result.credits.crew.filter((member) => member.job === "Director");   
            this.setState({
                 movie: result,
                 heroImage: this.state.heroImage || result,
                 loading: false,
                 directors:  directors,
                 casts: result.credits.cast,
                 crew: result.credits.crew
             });
        } 

    render() {
        return (
            <>
           {this.state.heroImage && (
                <div>
                    <MovieHero herodata={this.state.heroImage} directors={this.state.directors} />
                </div>
            )}
            {this.state.movie && (
                <MovieInfoBar data={this.state.movie} />
            )}
            {this.state.casts && (
                <div className="grid-wrap">
                    <h1>Actors</h1>
                    <div className="cast-wrap">
                        {this.state.casts.map((cast, i) => {
                            return <CastThumb cast={cast} key={i} /> 
                        })}
                    </div>
                </div>
            )}
            {this.state.crew && (
                <div className="grid-wrap">
                    <h1>Crew</h1>
                    <div className="cast-wrap">
                        {this.state.crew.map((crew, i) => {
                            return <CrewThumb crew={crew} key={i} /> 
                        })}
                    </div>
                </div>
            )}
            {this.state.loading && ( 
                <Spinner />
            )}
            </>
        );
    }
}

export default Movie;

