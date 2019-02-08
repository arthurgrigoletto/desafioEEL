import React from 'react';
import { Link } from 'react-router-dom';
import './ComicItem.css';

export default ({ comic }) => {
  const {
    id,
    name,
    thumbnail: { extension, path }
  } = comic;
  return (
    <div className="col-sm-6">
      <Link to={{ pathname: `/${id}`, state: { id } }}>
        <div className="card card-comic offscreen">
          <img
            className="card-img-top-comic"
            src={`${path}.${extension}`}
            alt={name}
          />
        </div>
      </Link>
    </div>
  );
};
