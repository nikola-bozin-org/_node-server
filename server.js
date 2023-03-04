const ip = require('ip');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes')
const server = express();


const port = 9876;

const approvedOrigins = ['http://localhost:3000',]
app.use(cors({
  origin: approvedOrigins
}));
server.use(express.json()); 
server.use(express.urlencoded({ extended: true })); 
server.use(helmet());
server.use('/api',router);

//cluster, child process za expensive endpoint

const startServer = async()=>{
  server.listen(port, () => {
    console.log(`Server listening at ${ip.address()}:${port}`);
  });
}

startServer();