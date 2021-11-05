const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const Todo = require('./models/todoModel');
const todoController = require('./controller/todoController');

mongoose.connect('mongodb://127.0.0.1:27017/todolist', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
  global.console.log('banco de dados online');
});

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', todoController.getTodos);

app.post('/', todoController.createTodo);

app.get('/:id', (req, res) => {
  const { id } = req.params;
  Todo.findById(id, (_err, todo) => {
    res.json(todo);
  });
});

app.put('/:id', todoController.updateTask);
app.delete('/:id', todoController.deleteTask);

app.listen(port, () => {
  const message = `Example app listening on ${port}`;
  global.console.log(message);
});
