import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import CommentList from './ListComment';

export default props => {
  const [movie, setmovie] = useState([]);
  const addComment = comment => {
    setmovie({ comments: [...movie.comments, comment] });
    console.log(movie);
  };
  useEffect(() => {
    // console.log(props.user);
    fetch(props.url + 'movie/' + props.id)
      .then(data => data.json())
      .then(data => setmovie({ ...data }));
  }, [props.id]);
  return (
    <div>
      <div class="container">
        <div class="card text-center">
          <div class="card-header"> Movie Details</div>
          <div class="card-body">
            <h5 class="card-title">{movie[0] ? movie[0].name : 'No title'}</h5>
            <p class="card-text">
              {movie[0] ? movie[0].description : 'no description'}
            </p>
          </div>
          <div class="card-footer text-muted">
            {movie['comments'] ? 'comments' : 'comments'}
          </div>
          <ul class="list-group">
            <AddComment
              url={props.url}
              user={props.user}
              addComment={addComment}
              MovieId={props.id}
            />
            <CommentList comments={movie['comments']} />
          </ul>
        </div>
      </div>
    </div>
    //commentlist
    //commentform
  );
};
