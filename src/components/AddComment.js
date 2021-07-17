import React, { useState } from 'react';

export default ({ user, MovieId }) => {
  const [SearchText, setSearchText] = useState('');
  const [Rating, setRating] = useState(0);
  const addComment = () => {
    console.log(user);
    if (!user) {
      alert('please log in', user);
    } else {
      fetch('')
      console.log(SearchText, user.id, MovieId, Rating);
    }
  };
  return (
    <div>
      <div class="list-group-item d-flex justify-content-between align-items-start">
        <div class="card">
          <div class="row">
            <input
              onChange={e => setSearchText(e.target.value)}
              type="text"
              class="form-control col"
              placeholder="enter some comment"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="row">
            <input
              type="number"
              onChange={e => setRating(e.target.value)}
              class="col from-control"
              id="basic-addon2"
            />
            <button class=" col form-control" onClick={() => addComment()}>
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
