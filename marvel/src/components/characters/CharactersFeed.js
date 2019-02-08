import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

class CharactersFeed extends Component {
  render() {
    const { characters } = this.props;
    return characters.map(character => (
      <CharacterItem key={character._id} character={character} />
    ));
  }
}

CharactersFeed.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharactersFeed;
