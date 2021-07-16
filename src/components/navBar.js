import React from 'react';

export default ({ user }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid col">
      <a class="navbar-brand" href="/">
        Imdbv2
      </a>
      <div class="d-flex">
        <div>
          {!user ? (
            <a href="/login" class="btn btn-light">
              Login
            </a>
          ) : (
            ''
          )}
        </div>
        {!user ? (
          <a href="/Register" class="btn btn-light">
            Register
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  </nav>
);
