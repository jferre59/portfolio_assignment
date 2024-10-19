const express = require('express')
const cookieParser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to DressStore Application.')
})

// config
const config = require('./config/config.js');
// mongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri,{useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log("Database connected Sucessfully"))
.catch(err => console.error(`Connection Failed:$(err.message)`));

app.listen(config.port,()=>{
  console.info(`Server started on the port ${config.port}`)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

module.exports = app;