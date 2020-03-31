import React from 'react';
import { HERO_IMG } from '../../config';
import { StyledHeroImage } from '../styles/StyledHeroImage';

const HeroImage = ({ herodata }) => (
    <StyledHeroImage image={`${HERO_IMG}${herodata.backdrop_path}`}>
       <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{herodata.original_title}</h1>
                <p>{herodata.overview}</p>
            </div>
        </div>      
    </StyledHeroImage>   
)

export default HeroImage;