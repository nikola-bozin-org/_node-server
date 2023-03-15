const ip = require('ip');
const rateLimit = require('express-rate-limit');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routers/routes')
const server = express();

//2 requests every 15 minutes.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 6,
  standardHeaders: true,
  legacyHeaders: false,
});
const port = 9876;
const authorizationToken = (req,res,next) =>{
  const token = req.headers.authorization_token;
  if(!token) return res.status(400).json({error:`JWT 'authorizationToken' entry is not present in request headers.`}); 
  next();
}


const approvedOrigins = ['http://localhost:9876',]
server.use(cors({
  origin: approvedOrigins
}));
server.use(express.json()); 
server.use(express.urlencoded({ extended: true })); 
server.use(helmet());
server.use(limiter);
// server.use(authorizationToken);
server.use('/api',router);

const startServer = async()=>{
  server.listen(port, () => {
    console.log(`Server listening at ${ip.address()}:${port}`);
  });
}

startServer();