const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/todo-fancy');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongoose...'));

const todoRoutes = require('./routes/todoRoutes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/todos', todoRoutes);

app.listen(3000, () => console.log('Connected to server...'));