import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
export default ({ url, comments, user, setmovie }) => {
  const deleteComment = (value) => {
    console.log(value._id, user.token);

    axios
      .delete(url + 'comment/' + value._id, {
        headers: {
          'x-access-token': user.token,
        },
      })
      .then((resp) => {
        console.log('id : ' + resp.data.id);

        setmovie({
          comments: comments.filter((element) =>
            element._id == resp.data.id ? false : true
          ),
        });
      })
      .catch((err) => {
        console.log('err' + err);
      });
  };
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
                  {user ? (
                    value.username == user.full_name ? (
                      <button
                        class="btn btn-danger"
                        onClick={() => deleteComment(value)}
                      >
                        {' '}
                        D
                      </button>
                    ) : (
                      ''
                    )
                  ) : (
                    ''
                  )}
                  <div class="ms-2 me-auto">
                    <h6 class="fw-bold">{value.username}</h6>
                    <p> {value.comment} </p>
                  </div>
                  <span class="badge bg-primary rounded-pill">
                    {value.rating}
                  </span>
                </li>
              </div>
            );
          })
        : ''}
    </div>
  );
};
