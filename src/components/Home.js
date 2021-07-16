import React, { useState } from 'react';

import NavBar from './navBar';
import SearchForm from './SearchForm';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
export default () => {
  const [MovieId, setMovieId] = useState('');
  return (
    <div class="container-fluid">
      <SearchForm />
      <div class="container row">
        <div class="col">
          <MoviesList setMovieId={setMovieId} />
        </div>
        {MovieId ? (
          <div class="col">
            <MovieDetail id={MovieId} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
