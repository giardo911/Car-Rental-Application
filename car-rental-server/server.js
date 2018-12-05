let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser'),
    multer  = require('multer');
  
const crypto = require('crypto');
const path = require('path');


let storage = multer.diskStorage({
  destination: './images/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, path.basename(file.originalname,path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));

    })
  }
})

  let upload = multer({ storage: storage });
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
    console.log("Inside app : " + req.file);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});


app.post('/profile', upload.single('avatar'), function (req, res, next) {
    if(!req.file)
        return res.send("Error uploading file");
    else{
        console.log(req.file.filename);
        
        res.send("File uploaded successfully");
    }    
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Cars RESTful API server started on: ' + port);