const express = require('express');
const app = express();
const path = require('path');
require('./api/db/connection');

const jobRoute = require('./api/routes/job');

app.use(express.json());

app.use(express.static(path.join(__dirname,'node_modules')));
app.use(express.static(path.join(__dirname,'public')));


app.use('/api/jobs',jobRoute);

const port = process.env.port || 3000;

const server = app.listen(port,function(){
    console.log(`Server is running at port : ${server.address().port}`)
});