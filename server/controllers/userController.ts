import { Express } from "express"
import mongoose from "mongoose"
import { Request,Response,NextFunction } from "express"
import Project from "../models/Project"

const getAllProjects = async(req:Request,res:Response)=>{

    const d = await Project.find().exec();
    if(!d) return res.status(204).json({data:'no data exists'});

    res.status(200).json({data:d});
}

const getSelectProject = async(req:Request,res:Response)=>{

    const id = req.params.pid;

    const d = await Project.findOne({projectId:id}).exec();

    if(!d)
    {
        return res.status(404).json({data:'not found'});
    }

    res.status(200).json({data:d});
}

export  {getAllProjects,getSelectProject}