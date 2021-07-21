import React, { useEffect, useState } from 'react';

export default ({ comments }) => {
  return (
    <div>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        {/* <span class="badge bg-primary rounded-pill">{averageRating}</span> */}
        <div class="ms-2 me-auto">
          <div class="fw-bold">count: {comments ? comments.length : 0}</div>
        </div>
      </li>
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
    </div>
  );
};
