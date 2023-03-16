const jwt = require('../jwt')

const onPostRequest = (body) =>{
    console.info(`Processing POST request with body: ${body}`);
}
const onJwtSign = (toSign) =>{
    return jwt.sign(toSign);
}
const onJwtVerify = (token)=>{
    return jwt.verify(token);
}



module.exports={
    onPostRequest,
    onJwtSign,
    onJwtVerify,
}