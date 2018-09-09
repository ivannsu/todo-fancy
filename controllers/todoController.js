const Todo = require('../models/todo');
const dueDate = require('../helpers/dueDate');
const createObjectId = require('../helpers/createObjectId');

module.exports = {
  create: (req, res) => {
    let input = {
      name: req.body.name,
      description: req.body.description,
      dueDate: dueDate(3),
      userId: req.body.userId
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
  },

  findAll: (req, res) => {
    let id = createObjectId(req.body.userId);
    
    console.log(id);

    Todo.find({userId: id}).populate('userId')
    .then(todos => {
      res.status(200).json({
        message: 'success get all todos',
        todos: todos
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