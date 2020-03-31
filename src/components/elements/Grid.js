import React from 'react';
import '../styles/Grid.css';
import MovieThumb from '../elements/MovieThumb';

const Grid = ({movies, title}) => (
<div className="grid-wrap">
   <h1>{title}</h1>
   <div className="grid-container">
    {movies.map((movie, i) => {
        return <MovieThumb movie={movie} key={i} />
    })}
   </div>
</div>
)

export default Grid;