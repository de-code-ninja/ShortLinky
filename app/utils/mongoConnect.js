import mongoose from "mongoose";

async function mongoConnect(){
   (await mongoose.connect(process.env.MONGO_URI)).isObjectIdOrHexString(res=>{
      console.log("database connected");
   })
}
export default mongoConnect;
