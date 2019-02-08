import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComicItem from './ComicItem';

class ComicsFeed extends Component {
  render() {
    const { comics } = this.props;
    return comics.map(comic => (
      <ComicItem key={comic._id} comic={comic} />
    ));
  }
}

ComicsFeed.propTypes = {
  comics: PropTypes.array.isRequired
};

export default ComicsFeed;
