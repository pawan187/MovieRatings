import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
export default props => {
  const [email, setemail] = useState('');
  const history = useHistory();
  const [password, setpassword] = useState('');
  const login = async () => {
    console.log('post request sent');
    axios
      .post('https://wo1gh.sse.codesandbox.io/users/Login', {
        username: email,
        password: password
      })
      .then(response => {
        console.log(response.data);
        window.location.href = '/';
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
  return (
    <div class="container">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          onChange={e => setemail(e.target.value)}
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          onChange={e => setpassword(e.target.value)}
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button onClick={() => login()} type="submit" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
};
