const ip = require('ip');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes')
const server = express();


const approvedOrigins = ['http://localhost:3000',]
server.use(cors({
  origin: approvedOrigins
}));
server.use(express.json()); 
server.use(express.urlencoded({ extended: true })); 
server.use(helmet());
server.use('/api',router);

//child_process za expensive endpint

const port = 9876;
const startServer = async()=>{
  server.listen(port, () => {
    console.log(`Server: process ${process.pid} is listening at ${ip.address()}:${port}`);
  });
}

startServer();