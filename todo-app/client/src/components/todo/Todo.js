import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

import './Todo.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends Component {
  render() {
    return (
      <Paper style={{ padding: 18 }}>
        <TodoForm />
        <TodoList />
      </Paper>
    );
  }
}

export default Todo;
