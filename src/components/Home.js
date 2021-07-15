import React from 'react';

import NavBar from './navBar';
import SearchForm from './SearchForm';
import MoviesList from './MoviesList';
export default () => {
  
  return (
    <div>
      <SearchForm />
      <MoviesList />
    </div>
  );
};
