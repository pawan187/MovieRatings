import React, { useState } from 'react';
import axios from 'axios';
export default ({ url, user, MovieId, addComment }) => {
  const [SearchText, setSearchText] = useState('');
  const [Rating, setRating] = useState(0);
  const AddComment = () => {
    console.log(user);
    if (!user) {
      alert('please log in');
      setRating(0);
      setSearchText('');
    } else {
      console.log(SearchText, user.id, MovieId, Rating, user.token);
      axios
        .post(
          url + 'comment',
          {
            movieId: MovieId,
            userId: user.id,
            comment: SearchText,
            rating: Rating
          },
          {
            headers: {
              'x-access-token': user.token
            }
          }
        )
        .then(response => {
          console.log(response.data);
          addComment(response.data);
          setRating(0);
          setSearchText('');
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
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
            <button class=" col form-control" onClick={() => AddComment()}>
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
