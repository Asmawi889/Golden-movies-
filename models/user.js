const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  title: String,
  Actor: String,
  releasedate: Date,
  description: String,
  rating: {
    type: String,
    enum: ["1", "2", "3", "4", "5"]
  }
}, { timestamps: true })

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applications: [applicationSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
