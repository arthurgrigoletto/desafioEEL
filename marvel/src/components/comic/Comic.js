import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getComic } from '../actions/comicActions';
import Spinner from '../common/Spinner';
import './Comic.css';

class Comic extends Component {
  componentDidMount() {
    const { id } = this.props.location.state;
    this.props.getComic(id);
  }
  render() {
    const { comic, loading } = this.props.comic;
    console.log(comic);

    let comicItems;
    if (comic === null || loading || Object.keys(comic).length === 0) {
      comicItems = <Spinner />;
    } else {
      comicItems = (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                className="img-thumbnail img-fluid z-depth-4"
                alt={comic.name}
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              />
            </div>
            <div className="col-md-6 text-center d-flex justify-content-center align-items-center">
              <div className="comic-general-info">
                <h1 className="comic-title">
                  <strong>{comic.title}</strong>
                </h1>
                {comic.description !== null ? (
                  <p>{comic.description}</p>
                ) : (
                  <p>No provide description.</p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="buttons-container mt-5 mb-5">
                <h3 className="mb-4">
                  <strong>Characters</strong>
                </h3>
                {comic.characters.items.map(character => (
                  <Link
                    key={character.name}
                    to={{
                      pathname: `/characters/${
                        character.resourceURI.split('characters/')[1]
                      }`,
                      state: {
                        id: character.resourceURI.split('characters/')[1]
                      }
                    }}
                    className="button-custom btn mr-2 ml-2"
                  >
                    {character.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="comic">{comicItems}</div>;
  }
}

Comic.propTypes = {
  getComic: PropTypes.func.isRequired,
  comic: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comic: state.comic
});

export default connect(
  mapStateToProps,
  { getComic }
)(Comic);
