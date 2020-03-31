import React from 'react';
import { Link } from "@reach/router";
import '../styles/Header.css';
import logo from '../images/reactMovie_logo.08494abf.png';
import tmdb from '../images/tmdb_logo.27b65cb4.svg';

const Header = () => (
<div className="header">
    <div className="header-content">
        <Link to="/">
            <img src={logo} alt="logo" className="logo" />
        </Link>
        <a href="https://www.themoviedb.org">
            <img src={tmdb} alt="tmdb logo" className="logo-tmdb" />
        </a>
    </div>
</div>
)

export default Header;
