const express = require('express');
const server = express();


const port = 9876;



server.use(express.json()); 
server.use(express.urlencoded({ extended: true })); 


server.get('/',(req,res)=>{res.status(400).json({message:"Hello."})})


const startServer = async()=>{
  server.listen(port, () => {
    console.log(`Server listening at PORT: ${port}`);
  });
}

startServer();