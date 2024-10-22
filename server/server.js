//Jacob Ferreira - 301452914
//Date: 2024-10-22
//server.js modified from code provided in class

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const assetsRouter = require("./asset-router");
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to DressStore Application.') //Message to display on server page as required by assignment
})

// config
const config = require('./config/config.js');
// mongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri,{useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log("Database connected Sucessfully")) // indicating in console whether database is connecting properly
.catch(err => console.error(`Connection Failed:$(err.message)`));

app.listen(config.port,()=>{
  console.info(`Server started on the port ${config.port}`)
});

// Server static file
app.use("/",express.static(path.join(__dirname,"public")));
app.use("/src",assetsRouter);
// API endpoint
app.get('/api/v1', (req, res) => {
  res.json({
    project:"React Project",
    from:"COMP229"
  });
});

// Extract routes from React/Client
app.get('/*',function (req,res){
res.sendFile(path.join(__dirname,"../public","index.html"))
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

module.exports = app;