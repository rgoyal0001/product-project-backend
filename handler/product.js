const productModel=require('../database/product')

const getIPModel=require('../database/getIP')

async function getMeIP(req,res,next){
    // console.log('hello')
    const {website_name:webName}=req.body;
    // console.log('abc')
    let website_name=new getIPModel(webName);

    await website_name.save();
    return res.send({
        data:website_name
    })
}


async function findAllProducts(req,res,next){
    const products=await productModel.find();
    return res.send({
        data:products
    })
}

async function createProduct(req,res,next){
    const {products:pData}=req.body;
    let product=new productModel(pData);
    // console.info(product)
    await product.save();
    return res.send({
        message:'created done',
        data:product
    })
}
async function updateProduct(req,res,next){
    const {products:pData}=req.body;
    const {productId:pId}=req.params;

    let product=await productModel.findByIdAndUpdate(pId,pData);

    return res.send({
        message:'updated done',
        data:product
    })
}

async function deleteProduct(req,res,next){
    const {productId:pId}=req.params;
    
    let product=await productModel.findByIdAndDelete(pId)

    if(product){
        return res.send({
            message:"deleted"
        })
    }
    else{
        return res.status(404).send('not found')
    }
}



module.exports={
    findAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getMeIP,
}