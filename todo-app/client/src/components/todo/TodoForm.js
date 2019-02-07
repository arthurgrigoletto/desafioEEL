import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import api from '../services/api';

class TodoForm extends Component {
  state = {
    newTask: ''
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleNewTask = async ({ keyCode }) => {
    if (keyCode !== 13) return;

    const description = this.state.newTask;

    await api.post('/todo', { description });

    this.setState({ newTask: '' });
  };

  render() {
    return (
      <form>
        <TextField
          variant="outlined"
          label="Adicionar Tarefa"
          margin="normal"
          fullWidth
          name="newTask"
          value={this.state.newTask}
          onChange={this.handleInputChange}
          onKeyDown={this.handleNewTask}
        />
      </form>
    );
  }
}

export default TodoForm;
