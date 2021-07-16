import React, { useState } from 'react';

export default () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const Register = () => {
    console.log(email, name, password);
  };
  return (
    <div class="container">
      <div class="mb-3">
        <label for="full_name" class="form-label">
          Full Name
        </label>
        <input
          onChange={e => setname(e.target.value)}
          type="full_name"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          onChange={e => setemail(e.target.value)}
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
      <button
        type="submit"
        onClick={() => Register()}
        class="btn btn-primary form-control"
      >
        Submit
      </button>
    </div>
  );
};
