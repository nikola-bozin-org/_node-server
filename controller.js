const getDefault = async(req,res)=>{
    res.send('Hello, GET request');
}

const postDefault = async(req,res)=>{
    res.send(`Hello, POST request. Body: ${JSON.stringify(req.body)}`);
}
const patchDefault = async(req,res)=>{
    res.send(`Hello, PATCH request`);
}
const putDefault = async(req,res)=>{
    res.send(`Hello, PUT request`);
}
const deleteDefault = async(req,res)=>{
    res.send(`Hello, DELETE, request`);
}

module.exports={
    getDefault,
    postDefault,
    patchDefault,
    putDefault,
    deleteDefault,
}