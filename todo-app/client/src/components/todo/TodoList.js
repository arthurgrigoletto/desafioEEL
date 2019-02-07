import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markAsDone, markAsPending, remove } from '../actions/todoActions';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete, Check, Replay } from '@material-ui/icons';
import If from '../template/If';

class TodoList extends Component {
  render() {
    const { tasks, markAsDone, markAsPending, remove } = this.props;

    return (
      <List component="ul">
        {tasks.map(task => (
          <ListItem key={task._id}>
            <ListItemText
              primary={task.description}
              className={task.done ? 'markedAsDone' : ''}
            />
            <ListItemSecondaryAction>
              <If test={!task.done}>
                <IconButton onClick={() => markAsDone(task)}>
                  <Check />
                </IconButton>
              </If>
              <If test={task.done}>
                <IconButton onClick={() => markAsPending(task)}>
                  <Replay />
                </IconButton>
                <IconButton onClick={() => remove(task)}>
                  <Delete />
                </IconButton>
              </If>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.todo.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
