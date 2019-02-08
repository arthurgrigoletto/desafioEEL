import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterItem.css';

export default ({ character }) => {
  const {
    id,
    name,
    thumbnail: { extension, path }
  } = character;
  return (
    <div className="col-sm-4 mb-2">
      <Link to={{ pathname: `/characters/${id}`, state: { id } }}>
        <div class="card card-character bg-dark text-white">
          <img src={`${path}.${extension}`} class="card-img" alt="..." />
          <div class="text-white text-center">
            <div class="card-img-overlay">
              <h3 class="card-title pt-2">
                <strong>{name}</strong>
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
