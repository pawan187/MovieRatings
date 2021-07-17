import React, { useState } from 'react';

export default ({ user }) => {
  const [SearchText, setSearchText] = useState('');
  const addComment = () => {
    if (!user) {
      alert('please log in',user);
    } else {
      console.log(SearchText,user._id,MovieId, Rating);
    }
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
        <button
          onClick={() => addComment()}
          class="input-group-text"
          id="basic-addon2"
        >
          add
        </button>
      </div>
    </div>
  );
};
