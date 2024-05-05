const express = require('express');
const app = express();

const token = null;

// 미들 웨어 1
const checkAuth = (req, res, next) => {
    console.log("she has admin permission")
    next()
}

// 미들 웨어 2
const checkToken = (req, res, next) => {
    if(token){
        console.log("you have token")
        next()
    }
    res.send("you don't have token") // return 같은거. 여기서 작동이 끝난다.
}

const getUser = (req, res) => {
    console.log("here is user info")
    res.send("here is user info")
}

app.get("/users", checkAuth, checkToken,  getUser)

app.listen(5004, ()=>{
    console.log("server is on 5004")
})