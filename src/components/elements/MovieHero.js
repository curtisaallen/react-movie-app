import React from 'react';
import { HERO_IMG, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { StyledHeroImage } from '../styles/StyledHeroImage';

const MovieHero = ({ herodata, directors }) => (
    <StyledHeroImage image={`${HERO_IMG}${herodata.backdrop_path}`}>
        <div className="movieinfo-hero" >
        <div className="movieinfo-content">
            <div className="movieinfo-thumb">
                <div className="sc-htoDjs cxazkU">
                    <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${herodata.poster_path}`} alt={`${herodata.original_title} movie poster`} />
                </div>
            </div>
            <div className="movieinfo-text">
                <h1>{herodata.original_title}</h1>
                <h3>PLOT</h3>
                <p>{herodata.overview}</p>
                <div className="rating-director">
                    <div>
                        <h3>IMDB RATING</h3>
                        <div className="score">{herodata.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR</h3>
                        {directors.map((item, i) => <p key={i}> {item.name} </p>)}
                    </div>
                </div>
            </div>
        </div> 
        </div>   
    </StyledHeroImage>   
)

export default MovieHero;