import React from 'react';

import NavBar from './navBar';

export default () => {
  return (
    <div>
      <NavBar />
      <div class="navbar container-fluid col">
        <div class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </div>
      Homepage
    </div>
  );
};
