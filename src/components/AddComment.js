import React, { useState } from 'react';

export default ({ user }) => {
  const [SearchText, setSearchText] = useState('');
  const addComment = () => {
    console.log(SearchText);
  };
  return (
    <div>
      <div class="input-group mb-3">
        <input
          onChange={e => setSearchText(e.target.value)}
          type="text"
          class="form-control"
          placeholder="enter some comment"
          aria-describedby="basic-addon2"
        />
        <span
          onClick={() => {
            addComment;
          }}
          class="input-group-text"
          id="basic-addon2"
        >
          add
        </span>
      </div>
    </div>
  );
};
