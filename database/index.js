const mongoose=require('mongoose')

async function connectDatabase(){
    const dbUri="mongodb://127.0.0.1:27017/firstEvaluation";

    try {
        const res=await mongoose.connect(dbUri)
        console.log('database connection successful')

    } catch (error) {
        console.log('error',error)
    }
}

module.exports=connectDatabase;