const express=require('express');

const {getMeIP}=require('../handler/getIP')


const getIPRouter=express.Router()

getIPRouter.post('/getmeip',getMeIP);






module.exports=getIPRouter;