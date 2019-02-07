/* eslint no-param-reassign: ["error", { "props": false }] */

const Todo = require('../../models/Todo');

const index = async (req, res) => {
  const todos = await Todo.find({}).sort('-createdAt');

  return res.json(todos);
};

const store = async (req, res) => {
  const todo = await Todo.create(req.body);

  req.io.emit('todo', todo);

  return res.json(todo);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;

  const todo = await Todo.findById(id);

  // New description
  todo.description = description || todo.description;

  // New Done
  todo.done = done || todo.done;

  await todo.save();

  req.io.emit('todo', todo);

  return res.json(todo);
};

const remove = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  await todo.remove();

  return res.json({ msg: 'success' });
};

module.exports = {
  index,
  store,
  update,
  remove
};
