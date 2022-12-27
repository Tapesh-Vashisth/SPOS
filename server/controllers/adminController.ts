import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import Project from '../models/Project';
import Images from '../models/Images';

const getImagesOfAProject = async (req: Request, res: Response) => {

    const images = await Images.findOne({ projectName: req.params.pname });

    if (!images) return res.status(404).json({ data: 'no images found for the projectid' });

    res.status(200).json({ docs: images?.projectImages });
}

const getImagesOfAllProject = async (req: Request, res: Response) => {
    console.log('inside this');
    const images = await Images.find().exec();

    if (!images) return res.status(404).json({ data: 'no images found for the projectid' });

    res.status(200).json({ data:images });
}

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

        total.push({project:x,images:images});

        count++;

        console.log(total);

        if(count==projects.length) return res.status(200).json({data:total});
        
    })
}

let pid = 1567;
const handlePostProject = async (req: Request, res: Response) => {
    const pname = req.body.pname;
    const pdesc = req.body.pdesc;
    const ptitle = req.body.ptitle;
    const clientname = req.body.clientname;
    const status = req.body.status;
    console.log(pname,ptitle);

    const check = await Project.findOne({projectName:pname}).exec();
    if(!check)
    {
        const newproject = await new Project({
            projectTitle:ptitle,
            projectDesc:pdesc,
            clientName:clientname,
            projectName:pname,
            status:status,
            projectId:pid
        })
        await newproject.save();
        console.log(newproject);
        pid=pid+9;

        return res.status(201).json({data:newproject});
    }
    
    return res.status(204).json({data:'no'});
}

const setImagesOfAProject = async (req: any, res: Response) => {
    // console.log('in');
    var files: any;
    const f = req.files;
    console.log('file is ',f)
    console.log(req.params);

    f.forEach(async (e: any) => {
        if ((e.mimetype === 'image/png' || e.mimetype === 'image/jpg' || e.mimetype === 'image/jpeg' || e.mimetype === 'application/pdf')) {
            const projectImage = await Images.findOne({ projectName: req.params.pname });
            console.log(projectImage);
            const img = {
                data: fs.readFileSync(path.join(__dirname + `/../uploads/${e.filename}`)),
                contentType: `${e.mimetype}`
            }

            if(!projectImage)
            {
                const newImage = await new Images({
                    projectName:req.params.pname,
                    projectImages:img
                });
                await newImage?.save();
            }
            else
            {
                // console.log(img);
                projectImage?.projectImages.push(img);
    
                await projectImage?.save();
            }
        }
    });

}


export { setImagesOfAProject,getAllProjects, getImagesOfAProject,getImagesOfAllProject, handlePostProject };