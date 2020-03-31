const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

const POPULAR_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const HERO_IMG = `${IMAGE_BASE_URL}${BACKDROP_SIZE}`;

const MOVIE_DETAILS = (id) => {
    return `${API_URL}movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`;
}

export { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, POPULAR_URL, HERO_IMG, MOVIE_DETAILS };