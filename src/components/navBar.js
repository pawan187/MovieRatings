import React from 'react';

export default ({
  user,
  ShowLogin,
  ShowRegister,
  setShowLogin,
  setShowRegister
}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid col">
        <a class="navbar-brand" href="/">
          Imdbv2
        </a>
        <div class="d-flex">
          <div>
            {!user ? (
              <button
                onClick={() => {
                  setShowLogin(true);
                  setShowRegister(false);
                }}
                class="btn btn-light"
              >
                Login
              </button>
            ) : (
              ''
            )}
          </div>
          {!user ? (
            <button
              onClick={() => {
                setShowRegister(true);
                setShowLogin(false);
              }}
              class="btn btn-light"
            >
              Register
            </button>
          ) : (
            <div>
              Hello , {user.email}
              <button class="btn btn-light">logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
