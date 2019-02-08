import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCharacter } from '../actions/characterActions';
import Spinner from '../common/Spinner';
import './Character.css';

class Character extends Component {
  componentDidMount() {
    const { id } = this.props.location.state;
    this.props.getCharacter(id);
  }
  render() {
    const { character, loading } = this.props.character;
    console.log(character);

    let characterItems;
    if (character === null || loading || Object.keys(character).length === 0) {
      characterItems = <Spinner />;
    } else {
      characterItems = (
        <div className="row">
          <div className="col-6">
            <img
              className="img-thumbnail img-fluid z-depth-4"
              alt={character.name}
              src={`${character.thumbnail.path}.${
                character.thumbnail.extension
              }`}
            />
          </div>
          <div className="col-md-6 text-center d-flex justify-content-center align-items-center">
            <div className="character-general-info">
              <h1 className="character-name">
                <strong>{character.name}</strong>
              </h1>
              {character.description !== '' ? (
                <p>{character.description}</p>
              ) : (
                <p>No provide description.</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="buttons-container mt-5 mb-5">
              <h3 className="mb-4">
                <strong>comics</strong>
              </h3>
              {character.comics.items.map(comic => (
                <Link
                  key={comic.name}
                  to={{
                    pathname: `/comics/${
                      comic.resourceURI.split('comics/')[1]
                    }`,
                    state: { id: comic.resourceURI.split('comics/')[1] }
                  }}
                  className="button-custom btn mr-2 ml-2"
                >
                  {comic.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="character">
        <div className="container">{characterItems}</div>
      </div>
    );
  }
}

Character.propTypes = {
  getCharacter: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  character: state.character
});

export default connect(
  mapStateToProps,
  { getCharacter }
)(Character);
