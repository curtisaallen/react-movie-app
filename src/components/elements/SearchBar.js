import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }
    searchMovie = (event) => {
        const {search} = this.props;  
        this.setState({
            searchTerm: event.target.value
        })
        search(event.target.value)
    }
    render() {
        return (
            <div className="search-wrap">
                <div className="search-col">
                    <span className="fa fa-search fa-2x fa-search"></span>
                    <input 
                        type="text" 
                        placeholder="Search Movie"
                        onChange={this.searchMovie}
                        value={this.state.searchTerm}
                     />
                </div>
            </div>
        )
    }
}
export default SearchBar;