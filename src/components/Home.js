import React from 'react';

import { API_URL, API_KEY, POPULAR_URL } from '../config';
import './styles/Home.css';
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

class Home extends React.Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        search: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
        gridTitle: 'Popular Movies'
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.fetchItems(POPULAR_URL);
    }

    fetchItems = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();
        this.setState({
            movies: [...this.state.movies, ...result.results],
            heroImage: this.state.heroImage || result.results[0],
            loading: false,
            search: true,
            currentPage: result.page,
            totalPages: result.total_pages
        });    
    } 

    searchMovies = async (search) => {
        if(search !== ''){
            const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${search}`;
            const response = await fetch(endpoint);
            const result = await response.json();
            this.setState({
                search: false,
                movies: result.results,
                gridTitle: 'Search Movies'
            });
        }

        if(search === '') {
            this.setState({ movies: [], gridTitle: 'Popular Movies', search: true }); 
            this.fetchItems(POPULAR_URL); 
        } 
    }

    loadMoreItems = () => { 
       const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
       this.fetchItems(endpoint);
    }

    render() {
        return (
        <>
            {this.state.heroImage && (
              <div>
                 <HeroImage herodata={this.state.heroImage} />
              </div>
            )}
            {this.state.movies && (
                <SearchBar search={this.searchMovies} />
            )}
            {this.state.movies && (
                <Grid title={this.state.gridTitle} movies={this.state.movies} />
            )}
            {this.state.search && (
                <LoadMoreBtn click={this.loadMoreItems} />
            )}
            {this.state.loading && ( 
                <Spinner />
            )}
        </>
        )
    }
}

export default Home;