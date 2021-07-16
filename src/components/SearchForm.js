import React, { useState } from 'react';

export default ({ SearchText }) => {
  const [text, setText] = useState('');
  return (
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <input
              onChange={e => setText(e.target.value)}
              class="form-control col me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn col-3 btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <p> {text} </p>
      </div>
    </div>
  );
};
