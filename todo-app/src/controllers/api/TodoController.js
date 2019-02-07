/* eslint no-param-reassign: ["error", { "props": false }] */

const Todo = require('../../models/Todo');

const index = async (req, res) => {
  const { description__regex: regex } = req.query;
  let todos = [];

  if (regex) {
    let newRegex = new RegExp(regex);
    todos = await Todo.find({
      description: { $regex: newRegex, $options: 'i' }
    });
  } else {
    todos = await Todo.find({}).sort('-createdAt');
  }

  return res.json(todos);
};

const store = async (req, res) => {
  const todo = await Todo.create(req.body);

  return res.json(todo);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;

  const todo = await Todo.findById(id);

  // New description
  todo.description = description || todo.description;

  // New Done
  if (done !== undefined) {
    todo.done = done;
  }

  await todo.save();

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
