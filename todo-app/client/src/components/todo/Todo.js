import React, { Component } from 'react';
import { connect } from 'react-redux';
import { index } from '../actions/todoActions';
import './Todo.css';
import api from '../services/api';
import { Paper, TextField } from '@material-ui/core';
import TodoList from './TodoList';

class Todo extends Component {
  state = {
    newTask: ''
  };

  componentDidMount() {
    this.props.index();
  }

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
    const { tasks } = this.props.todo;
    return (
      <Paper style={{ padding: 18 }}>
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
        <TodoList tasks={tasks} />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { index }
)(Todo);
