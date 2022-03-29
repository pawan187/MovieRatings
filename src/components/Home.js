import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';
import NavBar from './navBar';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import Dashboard from './Dashboard';
export default () => {
  const [MovieId, setMovieId] = useState('');
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState();
  const [ShowDashboard, setShowDashboard] = useState(false);
  const [ShowAddMovie, setShowAddMovie] = useState(false);

  const url = 'https://jkmdxk.sse.codesandbox.io/';
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('user'));
    if (data) {
      setUser(data);
    }
    console.log(user);
  }, []);
  return (
    <div class="container-fluid">
      <NavBar
        setUser={setUser}
        setShowAddMovie={setShowAddMovie}
        user={user}
        setShowDashboard={setShowDashboard}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />
      {ShowDashboard && user ? <Dashboard url={url} user={user} /> : ''}
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
      {!(ShowRegister || ShowLogin || ShowDashboard) ? (
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
