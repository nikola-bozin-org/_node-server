const getDefault = async(req,res)=>{
    res.send(`Hello, GET request. Process: ${process.pid}`);
}

const postDefault = async(req,res)=>{
    res.send(`Hello, POST request. Body: ${JSON.stringify(req.body)}  Process: ${process.pid}`);
}


module.exports={
    getDefault,
    postDefault
}