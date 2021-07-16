import React, {useState} from 'react';

export default () =>{ 
  const [SearchText, setSearchText] = useState('')
  return (
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="enter some comment"
        aria-describedby="basic-addon2"
      />
      <span class="input-group-text" id="basic-addon2">
        add
      </span>
    </div>
  </div>
)};
