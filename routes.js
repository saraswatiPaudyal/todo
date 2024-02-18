const express = require('express')
const router = express.Router()
var {homePage,userRegister,userLogin} = require("./controller")

router.get("/",homePage)
.post("/register",userRegister)
.post("/login",userLogin)
module.export = router