import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import { getCharacters } from '../actions/characterActions';
import Card from '../common/Card';

class Characters extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const { characters, loading } = this.props.character;

    let characterItems;
    if (characters === null || loading) {
      characterItems = <Spinner />;
    } else {
      if (characters.length > 0) {
        characterItems = characters.map(character => (
          <Card key={character.id} entity={character} />
        ));
      } else {
        characterItems = <h4>No Characters found...</h4>;
      }
    }
    return (
      <div className="characters">
        <div className="card-deck">{characterItems}</div>
      </div>
    );
  }
}

Characters.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  character: state.character
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(Characters);
