const mongoose = require('mongoose');
require('../models/schema')
mongoose.connect('mongodb://localhost/JobDB').then(()=>console.log('Mongo connectivity established')).catch(err => console.log(err));


