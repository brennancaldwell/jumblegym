const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let savedExercises = new Schema({
  name: {type: String},
  type: {type: String},
  date: {type: String},
  template: {type: [Object], blackbox: true},
});

module.exports = mongoose.model('savedExercises', savedExercises);