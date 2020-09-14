const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/savedExercises', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', () => console.log('MongoDB successfully connected'));