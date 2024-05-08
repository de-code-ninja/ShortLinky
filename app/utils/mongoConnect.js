import mongoose from "mongoose";

async function mongoConnect(){
   (await mongoose.connect("mongodb://localhost:27017/urlShortner")).isObjectIdOrHexString(res=>{
      console.log("database connected");
   })
}
export default mongoConnect;