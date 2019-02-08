import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getComics } from '../actions/comicActions';
import Card from '../common/Card';

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
        comicItems = comics.map(comic => (
          <Card key={comic.id} entity={comic} />
        ));
      } else {
        comicItems = <h4>No Comics found...</h4>;
      }
    }
    return (
      <div className="characters">
        <div className="card-deck">{comicItems}</div>
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
