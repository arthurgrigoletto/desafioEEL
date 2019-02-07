const routes = require('express').Router();

const TodoController = require('./controllers/api/TodoController');

/*
================================================================================
================================================================================
================================ TODO ROUTES ===================================
================================================================================
================================================================================
*/

// @route   GET api/todo
// @desc    List All todos
// @access  Public
routes.get('/todo', TodoController.index);

// @route   POST api/todo
// @desc    Create a Todo Task
// @access  Public
routes.post('/todo', TodoController.store);

// @route   PUT api/todo/:id
// @desc    Update a Todo Task
// @access  Public
routes.put('/todo/:id', TodoController.update);

// @route   DELETE api/todo/:id
// @desc    Delete a todo task
// @access  Public
routes.delete('/todo/:id', TodoController.remove);

module.exports = routes;
