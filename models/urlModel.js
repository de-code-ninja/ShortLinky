import mongoose from "mongoose";

const urlSchema =new mongoose.Schema({
    oldUrl:String,
    newUrl:{type: String, required: true}
})


const urlModel = mongoose.models.urlData || mongoose.model("urlData",urlSchema);

export default urlModel;