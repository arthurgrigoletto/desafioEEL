import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { Edit, Delete, Check, Replay } from '@material-ui/icons';
import IconButton from '../template/IconButton';

const TodoList = ({ tasks, markAsDone, markAsPending, remove }) => {
  const renderRows = () => {
    return tasks.map(task => (
      <ListItem key={task._id} button>
        <ListItemText
          primary={task.description}
          className={task.done ? 'markedAsDone' : ''}
        />
        <ListItemSecondaryAction>
          <IconButton hide={task.done}>
            <Check onClick={() => markAsDone(task)} />
          </IconButton>
          <IconButton hide={!task.done}>
            <Replay onClick={() => markAsPending(task)} />
          </IconButton>
          <IconButton hide={!task.done}>
            <Delete onClick={() => remove(task)} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };
  return <List component="ul">{renderRows()}</List>;
};

export default TodoList;
