import mongoose from "mongoose";
const schema = mongoose.Schema;

const ImageSchema = new schema({
    projectName:{type:String,required:true},
    projectImages:[
        {
            data:Buffer,
            contentType:String
        }
    ]
},{versionKey:false});

export default mongoose.model('Images',ImageSchema);