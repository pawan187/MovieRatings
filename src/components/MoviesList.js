import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
export default ({ setMovieId }) => {
  const [list, setList] = useState([]);
  const [SearchText, setSearchText] = useState('');
  const [SearchList, setSearchList] = useState('');
  useEffect(() => {
    fetch('https://wo1gh.sse.codesandbox.io/movies')
      .then(data => data.json())
      .then(data => {
        setList(data);
        setSearchList(data);

        console.log(list);
      });
  }, []);
  const changeList = SearchText => {
    setSearchList(list.filter(value => value.name.includes(SearchText)));
  };
  return (
    <div class="card">
      <div class="card-body">
        <ol class="list-group list-group-numbered">
          <div>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">
                  <SearchForm setSeachText={changeList} />
                </div>
              </div>
            </li>
          </div>
          {SearchList.length > 0
            ? SearchList.map((value, index) => {
                return (
                  <div key={index}>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">
                          <button
                            class="btn btn-light fw-bold"
                            onClick={() => setMovieId(value._id)}
                          >
                            {value.name}
                          </button>
                        </div>
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
    </div>
  );
};
