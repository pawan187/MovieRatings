import React from 'react';

export default () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid col">
      <a class="navbar-brand" href="#">
        Imdbv2
      </a>
      <div class="d-flex">
        {true ? (
          <a href="/login" class="btn btn-primary">
            Login
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  </nav>
);
