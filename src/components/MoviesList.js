import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddMovie from './AddMovie';
import SearchForm from './SearchForm';
export default ({ url, user, setMovieId, ShowAddMovie, setShowAddMovie }) => {
  const [list, setList] = useState([]);
  const [SearchText, setSearchText] = useState('');
  const [SearchList, setSearchList] = useState('');
  const [role, setrole] = useState('user');

  const pushMovie = movie => {
    setList(...list, movie);
    setSearchList(data);
  };
  useEffect(() => {
    fetch(url + 'movies')
      .then(data => data.json())
      .then(data => {
        setList(data);
        setSearchList(data);
        console.log(list);
      });

    if (user) {
      axios
        .get(url + 'users/verifyAdmin', {
          headers: {
            'x-access-token': user.token
          }
        })
        .then(response => {
          console.log(response.data);
          setrole('admin');
        })
        .catch(error => {
          setrole('user');
        });
    }
    console.log(user, role);
  }, [user]);
  const changeList = SearchText => {
    if (list.length > 0) {
      // console.log(list)
      setSearchList(list.filter(value => value.name.includes(SearchText)));
    }
  };
  return (
    <div class="card">
      <div class="card-body">
        <ol class="list-group list-group-numbered ">
          <div>
            <li class="list-group-item">
              <div class="row">
                <div class="col-9">
                  <SearchForm url={url} setSeachText={changeList} />
                </div>
                {role === 'admin' && user ? (
                  <div class="col">
                    <button
                      onClick={() => {
                        setShowAddMovie(!ShowAddMovie);
                      }}
                      class="btn btn-primary"
                    >
                      Add Movie
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </div>
              {role === 'admin' && ShowAddMovie && user ? (
                <div class=" card row">
                  <div class="col">
                    <AddMovie
                      url={url}
                      user={user}
                      setShowAddMovie={setShowAddMovie}
                      pushMovie={pushMovie}
                    />
                  </div>
                </div>
              ) : (
                ''
              )}
            </li>
          </div>
          {SearchList.length > 0
            ? SearchList.map((value, index) => {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setMovieId(value._id)}
                      class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                    >
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">
                          {/* <button
                            class="btn btn-light fw-bold"
                            onClick={() => setMovieId(value._id)}
                          > */}
                          Movie :{value.name}
                          {/* </button> */}
                        </div>
                        Description : {value.description}
                      </div>
                    </button>
                  </div>
                );
              })
            : 'No MoviesList'}
        </ol>
      </div>
    </div>
  );
};
