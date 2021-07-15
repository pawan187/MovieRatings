import React, { useState } from 'react';

export default () => {
  const [text, setText] = useState('');
  return (
    <div class="navbar container-fluid col">
      <div claa="container">
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
      <div class="row">
        <p> {text} </p>
      </div>
    </div>
  );
};
