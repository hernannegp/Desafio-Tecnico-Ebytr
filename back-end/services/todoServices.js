const Todo = require('../models/todoModel');

const getTasks = async () => {
  const allTodo = await Todo.find();
  return allTodo;
};

const createTask = async (data) => {
  try {
    const newTodo = new Todo(data);
    await newTodo.save();
  } catch (e) {
    global.console.log(e.message);
  }
};

const getTaskById = async (id) => {
  const findedTodo = Todo.findById(id, (err, todo) => {
    if (err) return global.console.log(err.message);
    return todo;
  });
  return findedTodo;
};

const updateTask = async (id, data) => {
  try {
    await Todo.findOneAndUpdate({ _id: id }, data);
  } catch (err) {
    global.console.log(err);
  }
};

const deleteTask = async (id) => {
  try {
    await Todo.findOneAndDelete({ _id: id });
  } catch (err) {
    global.console.log(err);
  }
};

module.exports = {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
