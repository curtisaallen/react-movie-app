import React from 'react';
import { Link } from "@reach/router";
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config';
const NoImage = 'https://dummyimage.com/224x336/000/ffffff&text=NO+IMAGE';

const MovieThumb = ({movie}) => (
<div className="grid-element">
    <div className="grid-item">
        <Link to={`details/${movie.id}`}>
            <img className="clickable" src={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage} alt="moviethumb" />
        </Link>
    </div>
</div>
)

export default MovieThumb;