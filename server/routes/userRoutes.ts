import express from 'express';
import {getAllProjects,getSelectProject} from '../controllers/userController';
const router = express.Router();

router.get('/',getAllProjects);
router.get('/:pid',getSelectProject);

export default router;