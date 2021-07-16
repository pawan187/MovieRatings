import React from 'react';

export default ({ comments }) => (
  <div>
    <ul>
      {comments
        ? comments.map((value, index) => {
            return (
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <span class="badge bg-primary rounded-pill">7.5</span>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
              </li>
            );
          })
        : ''}
    </ul>
  </div>
);
