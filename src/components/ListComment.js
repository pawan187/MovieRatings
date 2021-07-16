import React from 'react';

export default ({ comments }) => (
  <div>
    <ul>
      {comments
        ? comments.map((value, index) => {
            return (
              <div key={index}>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <span class="badge bg-primary rounded-pill">
                    {value.rating}
                  </span>
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{value.username}</div>
                    {value.comment}
                  </div>
                </li>
              </div>
            );
          })
        : ''}
    </ul>
  </div>
);
