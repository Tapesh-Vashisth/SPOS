import mongoose from "mongoose";
const schema = mongoose.Schema;

const ProjectSchema = new schema({
    projectTitle:{
        type:String,
        required:true
    },
    projectName:{type:String,required:true},
    projectId:Number,
    projectDesc:{type:String},
    clientName:{type:String}
},{versionKey:false});

export default mongoose.model('Project',ProjectSchema);