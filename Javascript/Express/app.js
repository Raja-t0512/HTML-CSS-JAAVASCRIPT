const express = require('express');
const app =express();

const port= 80;
app.get("/",(req,res)=>{
    res.send("This is my first app");
});
app.get("/about",(req,res)=>{
    res.send("This is about page of my first app");
});
app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found");
});
app.post("/about",(req,res)=>{
    res.send("This is post request about page of my first app");
});
app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})