const Todo = require('../services/todoServices');

const getTodos = async (req, res) => {
  const allTodos = await Todo.getTasks();
  return res.status(200).json(allTodos);
};

const createTodo = async (req, res) => {
  const newTodo = await Todo.createTask(req.body);
  return res.status(201).json(newTodo);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  const findedTodo = Todo.getTaskById(id);
  return res.json(findedTodo);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Todo.updateTask(id, req.body);
  return res.status(200).json(updatedTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await Todo.deleteTask(id);
  return res.status(200).json(deletedTask);
};

module.exports = {
  getTodos,
  createTodo,
  getTaskById,
  updateTask,
  deleteTask,
};
