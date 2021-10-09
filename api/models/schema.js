const mongoose = require('mongoose');
//{title, salary, location, description, experience, skills, postDate}
const jobSchema = mongoose.Schema({
    title : {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    salary : {
        type:Number
    },
    location: {
       coordinates:[Number]
    },
    description:String,
    expreience:{
        type: Number,
        default: 0
    },
    skills: [String],
    postDate: {
        type:Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Job',jobSchema,'jobs');