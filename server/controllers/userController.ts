import { Express } from "express"
import mongoose from "mongoose"
import { Request,Response,NextFunction } from "express"
import Project from "../models/Project"
import Image from "../models/Images"
import Images from "../models/Images"
import nodemailer from 'nodemailer';
require("dotenv").config();

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

const sendMailAfterContact = async(req:Request,res:Response)=>{

    const cname = req.body.name;
    const cemail = req.body.email;
    const desc = req.body.desc;

    console.log(cname,cemail,desc);

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "lummaoiscringe@gmail.com",
            pass: process.env.PASSWORD
        }
    })

    let mailOptions = {
        from: "lummaoiscringe@gmail.com",
        to: "pranauv1803@gmail.com",
        subject: "Regarding new client",
        text: `You have a pending request from the company ${cname}`,
        html: `<p> Respected Sir/Madam, we have redirected a contact request to you from ${cname}. These are the details :- 
               <br>
               client email : ${cemail}
               client description : ${desc} 
               </p>`
    }

    transporter.sendMail(mailOptions, (err: any, success: any) => {

        if (err) {
            console.log("error is : ", err)
            return res.status(503).json({'message':'mail not sent'});
        }
        else {
            console.log("success, email has been sent : ", success)
            res.status(200).json({'message':'email sent successfully'});
        }
    })
}

export  {getAllProjects,getSelectProject,sendMailAfterContact}