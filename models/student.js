var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StudentSchema   = new Schema({
    first_name: String,
    last_name: String,
    phone: Number,
    age: Number,
    school: String,
    course: String
});

module.exports = mongoose.model('Student', StudentSchema);