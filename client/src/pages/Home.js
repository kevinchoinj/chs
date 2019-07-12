import React from 'react';
import {elementList} from 'data/elementList';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    elementList.map(value => (
      <div key={value.id}>
        <Link to={`/elements/api-v2/elements/${value.id}`}>
          {value.name}
        </Link>
        <br/>
        {value.id}
      </div>
    ))
  )
}

export default Home;