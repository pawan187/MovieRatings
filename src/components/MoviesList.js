import React, { useState, useEffect } from 'react';

export default () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('https://0cys3.sse.codesandbox.io/movies')
      .then(data => data.json())
      .then(data => setList(data));
  }, []);
  return (
    <div>
      {list.length > 0
        ? list.map((value, index) => (
            <li key={index}>
              {' '}
              {value.name} : {value.description}{' '}
            </li>
          ))
        : 'No MoviesList'}
    </div>
  );
};
