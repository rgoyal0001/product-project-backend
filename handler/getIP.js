const getIPModel=require('../database/getIP')
async function getMeIP(req,res,next){
    console.log('hello')
    const {website_name:webName}=req.body;
    console.log('abc')
    // let website_name=new getIPModel(webName);

    // await website_name.save();
    // return res.send({
    //     data:website_name
    // })
    return;
}


module.exports=getMeIP;