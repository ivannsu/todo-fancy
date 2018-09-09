const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/todo-fancy', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongoose...'));

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/todos', todoRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Connected to server...'));