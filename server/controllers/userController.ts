import { Express } from "express"
import mongoose from "mongoose"
import { Request,Response,NextFunction } from "express"
import Project from "../models/Project"
import Image from "../models/Images"
import Images from "../models/Images"

const getAllProjects = async(req:Request,res:Response)=>{

    const projects = await Project.find().exec();
    let total:any=[];
    
    if(!projects)
    {
        return res.status(204).json({data:'no data exists'});
    }
    
    let count=0;
    projects.map(async(x)=>{
        const images = await Images.findOne({projectName:x.projectName}).exec();

        if(!images) total.push({projectName:x.projectName,status:x.status,image:null});
        else total.push({projectName:x.projectName,status:x.status,image:images?.projectImages[0]});

        count++;

        if(count==projects.length) return res.status(200).json({data:total});
        
    })
}

const getSelectProject = async(req:Request,res:Response)=>{

    const id = req.params.pname;

    const d = await Project.findOne({projectName:id}).exec();
    const i = await Image.findOne({projectName:id}).exec();

    if(!d)
    {
        return res.status(404).json({data:'not found'});
    }
    else
    {
        if(!i) return res.status(204).json({data:{project:d,images:null}});
        else res.status(200).json({data:{project:d,images:i.projectImages}});
    }
}

export  {getAllProjects,getSelectProject}