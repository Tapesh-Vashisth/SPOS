import mongoose from "mongoose";
const schema = mongoose.Schema;

const ImageSchema = new schema({
    projectId:Number,
    productImages:[
        {
            data:Buffer,
            contentType:String
        }
    ]
},{versionKey:false});

export default mongoose.model('Images',ImageSchema);