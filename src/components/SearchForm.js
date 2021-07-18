import React, { useState } from 'react';

export default ({ setSeachText }) => {
  return (
    <div class="container-fluid ">
      <div class="row">
        <input
          onChange={e => setSeachText(e.target.value)}
          class="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </div>
  );
};
