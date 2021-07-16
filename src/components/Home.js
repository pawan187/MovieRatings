import React, { useState, useEffect } from 'react';

import Login from './Login';
import Register from './Register';
import NavBar from './navBar';
import SearchForm from './SearchForm';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
export default () => {
  const [MovieId, setMovieId] = useState('');
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState();

  // useEffect(()=>{

  // },[])
  return (
    <div class="container-fluid">
      <NavBar
        user={user}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />
      {ShowLogin ? (
        <Login
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          setUser={setUser}
        />
      ) : (
        ''
      )}
      {ShowRegister ? (
        <Register setShowRegister={setShowRegister} setUser={setUser} />
      ) : (
        ''
      )}
      {!(ShowRegister || ShowLogin) ? (
        <div>
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
      ) : (
        ''
      )}
    </div>
  );
};
