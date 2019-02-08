import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getComics } from '../actions/comicActions';
import ComicFeed from './ComicsFeed';
import './Comics.css';

class Comics extends Component {
  componentDidMount() {
    this.props.getComics();
  }
  render() {
    const { comics, loading } = this.props.comic;

    let comicItems;
    if (comics === null || loading) {
      comicItems = <Spinner />;
    } else {
      if (comics.length > 0) {
        comicItems = (
          <div className="card-deck">
            <ComicFeed comics={comics} />
          </div>
        );
      } else {
        comicItems = <h4>No Comics found...</h4>;
      }
    }
    return (
      <div className="comics">
        <div className="container">{comicItems}</div>
      </div>
    );
  }
}

Comics.propTypes = {
  getComics: PropTypes.func.isRequired,
  comic: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  comic: state.comic
});
export default connect(
  mapStateToProps,
  { getComics }
)(Comics);
