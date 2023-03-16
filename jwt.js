const jwt = require('jsonwebtoken')
require('dotenv').config()


const sign =  (toSign) =>{
    return jwt.sign(toSign,process.env.JWT_SECRET)
}

const verify = (token)=>{
    let returnData;
    jwt.verify(token,process.env.JWT_SECRET,(err,data)=>{
        if(err) {
              return null; 
        }
        returnData = data;
    })
    return returnData;
}


module.exports={
    sign,verify
}