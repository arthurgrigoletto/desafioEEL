const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
