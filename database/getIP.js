const mongoose=require('mongoose')

const getIPSchema=new mongoose.Schema({
    website_name:String,
})

const getIPModel=mongoose.model('getIP',getIPSchema)

module.exports=getIPModel;