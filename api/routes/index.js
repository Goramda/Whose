const express = require('express');
const postRoute = require('./post/post');
const userRoute = require('./user/account');
const Router = express.Router()

Router.use('/post' , postRoute)
Router.use('/user' , userRoute)

module.exports = Router