import React from 'react';
import '../styles/MovieInfoBar.css';

import {calcTime, convertMoney} from '../../helpers';

const MovieInfoBar = ({data}) => (
    <div className="movieinfobar-wrap">
        <div className="movieinfobar-content">
            <div className="movieinfobar-content-col">
                <span aria-hidden="true" className="fa fa-clock-o fa-2x fa-time"></span>
                <span className="movieinfobar-info">Running time: {calcTime(data.runtime)}</span>
            </div>
            <div className="movieinfobar-content-col">
                <span aria-hidden="true" className="fa fa-money fa-2x fa-budget"></span>
                <span className="movieinfobar-info">Budget: {convertMoney(data.budget)}</span>
            </div>
            <div className="movieinfobar-content-col">
                <span aria-hidden="true" className="fa fa-ticket fa-2x fa-revenue"></span>
                <span className="movieinfobar-info">Revenue: {convertMoney(data.revenue)}</span>
            </div>
        </div>
    </div>
) 

export default MovieInfoBar;