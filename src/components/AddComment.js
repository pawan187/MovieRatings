import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import axios from 'axios';
export default ({ url, user, MovieId, addComment }) => {
  const [SearchText, setSearchText] = useState('');
  const [Rating, setRating] = useState(5);
  const AddComment = () => {
    console.log(user);
    if (!user) {
      setRating(0);
      setSearchText('');
      alert('please log in');
    } else if (SearchText === '' || Rating === null) {
      alert('Please give some comment and rating');
    } else {
      console.log(SearchText, user.id, MovieId, Rating, user.token);
      axios
        .post(
          url + 'comment',
          {
            movieId: MovieId,
            userId: user.id,
            comment: SearchText,
            rating: Rating,
          },
          {
            headers: {
              'x-access-token': user.token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          addComment(response.data);
          setRating(5);
          setSearchText('');
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div class="list-group-item d-flex justify-content-between align-items-start">
      <div class="row">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          value={SearchText}
          class="form-control col"
          placeholder="enter some comment"
        />
        {/* <div class='row'> */}
        <ReactStars
          // class="form-control col"
          count={5}
          value={Rating}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <div class="row">
        <button
          class="btn btn-primary form-control"
          onClick={() => AddComment()}
        >
          add
        </button>
      </div>
    </div>
  );
};
