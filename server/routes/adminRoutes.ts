import express from 'express';
const router = express.Router();
import {setImagesOfAProject,getAllProjects,getImagesOfAProject,getImagesOfAllProject,handlePostProject} from '../controllers/adminController';

const { diskStorage } = require('multer');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req:Request, file:any, cb:any) => {
        cb(null, '../server/dist/uploads')
    },
    filename: (req:Request, file:any, cb:any) => {
        cb(null, file.originalname)
    }
});

const upload = multer({storage:storage});

router.post('/images/:pname',upload.array('file',10),setImagesOfAProject);
router.get('/images',getImagesOfAllProject);
router.get('/projects',getAllProjects);
router.get('/images/:pname',getImagesOfAProject);
router.post('/new',handlePostProject);

export default router;