import React from 'react';

export default () => {
  return (
    <div class="container">
      <div class="mb-3">
        <label for="full_name" class="form-label">
          Full Name
        </label>
        <input
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
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          alert(email, password);
        }}
        class="btn btn-primary form-control"
      >
        Submit
      </button>
    </div>
  );
};
