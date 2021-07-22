import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetail from './MovieDetail';

const Movie = ({ url, movieId }) => {
  const [movieName, setmovieName] = useState('');
  useEffect(async () => {
    axios
      .get(url + 'movie/' + movieId)
      .then(res => res.data)
      .then(data => setmovieName(data[0].name));
  }, []);
  return (
    <>
      <h5 class="mb-1">Movie name: {movieName}</h5>
    </>
  );
};

export default ({ url, user }) => {
  const [activities, setActivities] = useState([]);
  useEffect(async () => {
    await axios
      .get(url + 'userDetails/' + user.id, {
        headers: {
          'x-access-token': user.token
        }
      })
      .then(response => {
        // alert(response.data);
        console.log(response.data);
        setActivities(response.data);
        // props.setMovies([...movies,response.data])
        // props.setShowAddMovie(false);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div className="card-header">Full name : {user.full_name}</div>
            <div className="card-body">Email : {user.email}</div>
            <div class="card-footer text-muted">Activities</div>

            {activities.length > 0 ? (
              <div class="row">
                <div class="col">
                  <div class="list-group">
                    {activities.map((value, index) => {
                      return (
                        <li
                          key={index}
                          class="list-group-item list-group-item-action"
                          aria-current="true"
                        >
                          <div class="d-flex w-100 justify-content-between">
                            <Movie
                              url={url}
                              user={user}
                              movieId={value.movieId}
                            />
                            {/* <h5 class="mb-1">Movie name: {value.movieId}</h5> */}
                            <small>Rating : {value.rating}</small>
                          </div>
                          <p class="mb-1">Commented : {value.comment}</p>
                        </li>
                      );
                    })}
                  </div>
                </div>
                {/* {MovieId ? (
                  <div class="col">
                    <MovieDetail user={user} url={url} id={MovieId} />
                  </div>
                ) : (
                  ''
                )} */}
              </div>
            ) : (
              ' no activity'
            )}
          </div>{' '}
        </div>
      </div>
    </div>
  );
};
