import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import NavBar from './navBar';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
export default () => {
  const [MovieId, setMovieId] = useState('');
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState();

  const [ShowAddMovie, setShowAddMovie] = useState(false);

  const url = 'https://r2f9j.sse.codesandbox.io/';
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('user'));
    setUser(data);
    console.log(user);
  }, []);
  return (
    <div class="container-fluid">
      <NavBar
        setUser={setUser}
        setShowAddmovie={setShowAddMovie}
        user={user}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />
      {ShowLogin ? (
        <Login
          url={url}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          setUser={setUser}
        />
      ) : (
        ''
      )}
      {ShowRegister ? (
        <Register
          url={url}
          setShowRegister={setShowRegister}
          setShowLogin={setShowLogin}
          setUser={setUser}
        />
      ) : (
        ''
      )}
      {!(ShowRegister || ShowLogin) ? (
        <div>
          <div class="container row">
            <div class="col">
              <MoviesList
                user={user}
                url={url}
                ShowAddMovie={ShowAddMovie}
                setShowAddMovie={setShowAddMovie}
                setMovieId={setMovieId}
              />
            </div>
            {MovieId ? (
              <div class="col">
                <MovieDetail user={user} url={url} id={MovieId} />
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
