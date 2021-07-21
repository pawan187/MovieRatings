import React, { useState } from 'react';
import axios from 'axios';
export default ({ url, user, MovieId, addComment }) => {
  const [SearchText, setSearchText] = useState('');
  const [Rating, setRating] = useState();
  const AddComment = () => {
    console.log(user);
    if (!user) {
      setRating(0);
      setSearchText('');
      alert('please log in');
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
    <div class="list-group-item d-flex justify-content-between align-items-start">
      <div class="row">
        <input
          onChange={e => setSearchText(e.target.value)}
          type="text"
          value={SearchText}
          class="form-control col-6"
          placeholder="enter some comment"
        />
        <input
          type="number"
          value={Rating}
          onChange={e => setRating(e.target.value)}
          class="from-control col "
          placeholder="give rating"
        />
        <button
          class="btn btn-primary col form-control"
          onClick={() => AddComment()}
        >
          add
        </button>
      </div>
    </div>
  );
};
