import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from '../actions/todoActions';
import { TextField } from '@material-ui/core';

class TodoForm extends Component {
  componentDidMount() {
    this.props.search();
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  keyHandler = e => {
    const { add, search, description, clear } = this.props;
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description);
    } else if (e.key === 'Escape') {
      clear();
    }
  };

  render() {
    const { description, changeDescription } = this.props;
    return (
      <TextField
        variant="outlined"
        label="Adicionar Tarefa"
        margin="normal"
        helperText="Press Enter to Add, Shif + Enter to Search, ESC to Clean"
        fullWidth
        name="newTask"
        onKeyUp={this.keyHandler}
        onChange={changeDescription}
        value={description}
      />
    );
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
