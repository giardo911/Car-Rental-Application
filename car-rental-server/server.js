let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://admin:Newuser123@kryptons-shard-00-00-jc3iq.mongodb.net:27017,kryptons-shard-00-01-jc3iq.mongodb.net:27017,kryptons-shard-00-02-jc3iq.mongodb.net:27017/CarRentalDB?ssl=true&replicaSet=Kryptons-shard-0&authSource=admin&retryWrites=true', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Cars RESTful API server started on: ' + port);