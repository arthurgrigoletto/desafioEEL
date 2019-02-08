import React from 'react';
import { Link } from 'react-router-dom';

export default ({ entity }) => {
  const {
    id,
    name,
    description,
    thumbnail: { extension, path }
  } = entity;
  return (
    <Link to={{pathname: `/${id}`, state:{id}}}>
      <div className="card">
        <img className="card-img-top" src={`${path}.${extension}`} alt={name} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <button type="button" className="btn btn-light-blue btn-md">
            Read more
          </button>
        </div>
      </div>
    </Link>
  );
};
