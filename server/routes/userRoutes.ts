import express from 'express';
import {getAllProjects,getSelectProject} from '../controllers/userController';
const router = express.Router();

router.get('/',getAllProjects);
router.get('/:pname',getSelectProject);

export default router;