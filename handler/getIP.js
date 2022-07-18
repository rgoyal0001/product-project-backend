const getIPModel=require('../database/getIP')
async function getMeIP(req,res,next){
    const {website_name:webName}=req.body;
    let website_name=new getIPModel(webName);

    await website_name.save();
    return res.send({
        data:website_name
    })
}


module.exports=getMeIP;