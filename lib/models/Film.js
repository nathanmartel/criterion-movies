const mongoose = require ('mongoose');

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // directorId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Director',
  //   required: true
  // },
  director: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: false
  },
  year: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('Film', filmSchema);
