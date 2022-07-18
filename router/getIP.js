const express=require('express');

const {getIP}=require('../handler/getIP')


const getIPRouter=express.Router()

getIPRouter.post('/getmeip',creategetIP);






module.exports=getIPRouter;