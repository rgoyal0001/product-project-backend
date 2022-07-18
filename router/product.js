const express=require('express');

const {findAllProducts, createProduct,updateProduct, deleteProduct,}=require('../handler/product')


const productRouter=express.Router()

productRouter.get('/products',findAllProducts);
productRouter.post('/products/create',createProduct);
productRouter.patch('/products/:productId',updateProduct);
productRouter.delete('/products/:productId',deleteProduct);





module.exports=productRouter;