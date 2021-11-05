const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todo', Todo);
