import React, { useState, useEffect } from 'react';

export default () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('https://0cys3.sse.codesandbox.io/movies')
      .then(data => data.json())
      .then(data => setList(data));
  }, []);
  return (
    <div class="container">
      <ol class="list-group list-group-numbered">
        {list.length > 0
          ? list.map((value, index) => {
              return (
                <div key={index}>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">{value.name}</div>
                      {value.description}
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                  </li>
                </div>
              );
            })
          : 'No MoviesList'}
      </ol>
    </div>
  );
};
