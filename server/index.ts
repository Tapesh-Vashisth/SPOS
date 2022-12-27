require('dotenv').config();
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes';
const app = express();
const port = process.env.PORT || 5500;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:'http://localhost:3000', methods: ["GET", "POST", "PUT", "DELETE"], credentials: true,exposedHeaders: ['Set-Cookie', 'Date', 'ETag']}));

// routes
app.use('/projects',userRoutes);
app.use('/admin',adminRoutes);

mongoose.connect('mongodb+srv://spos:spos123@cluster0.mb5no7j.mongodb.net/data?retryWrites=true&w=majority').then(()=>{
    app.listen(port, () => {
        console.log(`server listening on port ${port}`)
    });
}).catch(err=>console.log('some error in connecting'));