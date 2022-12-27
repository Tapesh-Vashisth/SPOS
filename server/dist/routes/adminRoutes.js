"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const adminController_1 = require("../controllers/adminController");
const { diskStorage } = require('multer');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../server/dist/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
router.post('/images/:pname', upload.array('file', 10), adminController_1.setImagesOfAProject);
router.get('/images', adminController_1.getImagesOfAllProject);
router.get('/images/:pname', adminController_1.getImagesOfAProject);
router.post('/new', adminController_1.handlePostProject);
exports.default = router;
