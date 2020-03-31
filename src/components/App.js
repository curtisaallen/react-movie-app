import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import NotFound from './elements/NotFound';
import Movie from './Movie';

const App = () => (
  <div>
  <Header />
  <Router>
     <Home path="/" />
     <Movie path="details/:movieId" />
     <NotFound default />
  </Router>
</div>
)
export default App;
