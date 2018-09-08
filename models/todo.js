const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: Date
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

let Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;