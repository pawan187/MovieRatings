import React, { useState } from 'react';

import axios from 'axios';
export default props => {
  const [title, settitle] = useState('');

  const [description, setdescription] = useState('');

  const addMovie = async () => {
    axios
      .post(
        props.url + 'movie',
        {
          name: title,
          description: description
        },
        {
          headers: {
            'x-access-token': props.user.token
          }
        }
      )
      .then(response => {
        // alert(response.data);
        console.log(response.data);
        props.pushMovie(response.data);
        // props.setMovies([...movies,response.data])
        // props.setShowAddMovie(false);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
  return (
    <div class="container">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          title
        </label>
        <input
          onChange={e => settitle(e.target.value)}
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          description
        </label>
        <input
          onChange={e => setdescription(e.target.value)}
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button
        onClick={() => addMovie()}
        type="submit"
        class="btn form-control btn-primary"
      >
        Submit
      </button>
    </div>
  );
};
