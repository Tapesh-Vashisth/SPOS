import express from 'express';
import {getAllProjects,getSelectProject, sendMailAfterContact} from '../controllers/userController';
const router = express.Router();

router.get('/',getAllProjects);
router.get('/:pname',getSelectProject);
router.post('/contact',sendMailAfterContact);

export default router;