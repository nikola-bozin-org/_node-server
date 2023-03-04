const getDefault = async(req,res)=>{
    res.send('Hello, GET request');
}

const postDefault = async(req,res)=>{
    res.send(`Hello, POST request. Body: ${JSON.stringify(req.body)}`);
}


module.exports={
    getDefault,
    postDefault
}