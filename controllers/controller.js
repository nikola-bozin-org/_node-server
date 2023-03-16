const statusCode = require('../statusCodes')
const service = require('../services/service')

const getDefault = async(req,res)=>{
    res.status(statusCode.OK).json({message:'Hello, GET request'});
}
const postDefault = async(req,res)=>{
    service.onPostRequest(req.body);
    res.status(statusCode.OK).json({message:`Hello, POST request. Body: ${JSON.stringify(req.body)}`});
}
const patchDefault = async(req,res)=>{
    res.status(statusCode.OK).json({message:'Hello, PATCH request'});
}
const putDefault = async(req,res)=>{
    res.status(statusCode.OK).json({message:'Hello, PUT request'});
}
const deleteDefault = async(req,res)=>{
    res.status(statusCode.OK).json({message:'Hello, DELETE request'});
}
const jwtSign = async(req,res)=>{
    const {toSign} = req.body;
    const token = service.onJwtSign(toSign);
    res.status(statusCode.OK).json({token:token})
}
const jwtVerify = async(req,res)=>{
    const token = req.headers.token;
    if(!token) return res.status(statusCode.ERROR).json({error:"Unauthorized"})
    const verifyResult = service.onJwtVerify(token);
    if(!verifyResult) return res.status(statusCode.ERROR).json({error:"Invalid token."})
    return res.status(statusCode.OK).json({verifyResult:verifyResult});
}

module.exports={
    getDefault,
    postDefault,
    patchDefault,
    putDefault,
    deleteDefault,
    jwtSign,
    jwtVerify
}