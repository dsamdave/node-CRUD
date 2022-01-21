
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  }
})
const Student = mongoose.model('Student', studentsSchema);

module.exports = Student;

// export default  Student;