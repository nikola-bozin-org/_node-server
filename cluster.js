const cluster = require('cluster');

if(cluster.isMaster){
    console.warn("Using Cluster. Be aware of modifying data(POST,PATCH) as it may cause conflicts and wrong informations if unhandled correctly.")
    const cpuCount = require('os').cpus().length;
    console.info(`Master has ${cpuCount} CPUs.`);
    for(let i=0;i<cpuCount;i++){
        cluster.fork();
    }
    //listen for dying workes.
    cluster.on('exit',()=>{
        console.info('Worker died. Clustering.')
        cluster.fork();
    })
}else{
    require('./server')
}