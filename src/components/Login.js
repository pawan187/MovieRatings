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
      .post(props.url + 'users/Login', {
        username: email,
        password: password
      })
      .then(response => {
        console.log(response.data);
        props.setShowLogin(false);
        props.setUser(response.data);
        localStorage.user = JSON.stringify(response.data);
      })
      .catch(error => {
        alert('Please check your credentials. Have you registered?');
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
          required
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
        <div class="valid-feedback">Looks good!</div>
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
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <button
        onClick={() => login()}
        type="submit"
        class="btn form-control btn-primary"
      >
        Submit
      </button>
    </div>
  );
};
