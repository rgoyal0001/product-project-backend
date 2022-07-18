const express=require('express')
const cors=require('cors')
const connectDatabase=require('./database/index')
const productRouter = require('./router/product')
// const getIPRouter = require('./router/getIP')


const app= express()

app.use(express.json())
app.use(cors());
app.use(logger);
app.use(productRouter);
// app.use(getIPRouter)

function logger(req,res,next){
    console.log(new Date, req.method,req.path)
    next();
}


connectDatabase().then(()=>{
    app.listen('7000',()=>{
        console.log('Servor is running at http://localhost:7000');

    })
})

