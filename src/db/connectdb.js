import mongoose from "mongoose";

const connectDB =  async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS={
            dbName: 'UserLogin',
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log('startt db')

    }catch(e){
        console.log(e)

    }
}

export default connectDB