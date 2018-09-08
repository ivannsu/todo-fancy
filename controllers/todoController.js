const Todo = require('../models/todo');
const dueDate = require('../helpers/dueDate');

module.exports = {
  create: (req, res) => {
    let input = {
      name: req.body.name,
      description: req.body.description,
      dueDate: dueDate(3)
    }

    Todo.create(input)
    .then(newTodo => {
      res.status(200).json({
        message: 'success create new todo',
        todo: newTodo
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'failed create new todo',
        error: err.message
      });
    });
  }
}