const express=require("express");

const app=express();

app.get("/ping",(req,res)=> {
    res.send("Hello there from the server side");
})

app.listen(8000,()=> {
    console.log("Server is listening at port 8000");
})


// Here we have not used the node_modules directly from this host os
// It is bcz we will install the required dependencies inside our dockerContainer i.e. in Debian Linux 
// so that there might not have any dependencies of the docker container on the host os so to keep it completely isolated