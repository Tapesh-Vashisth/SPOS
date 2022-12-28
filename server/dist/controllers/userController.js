"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailAfterContact = exports.getSelectProject = exports.getAllProjects = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const Images_1 = __importDefault(require("../models/Images"));
const Images_2 = __importDefault(require("../models/Images"));
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv").config();
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield Project_1.default.find().exec();
    let total = [];
    if (!projects) {
        return res.status(204).json({ data: 'no data exists' });
    }
    let count = 0;
    projects.map((x) => __awaiter(void 0, void 0, void 0, function* () {
        const images = yield Images_2.default.findOne({ projectName: x.projectName }).exec();
        if (!images)
            total.push({ projectName: x.projectName, status: x.status, image: null });
        else
            total.push({ projectName: x.projectName, status: x.status, image: images === null || images === void 0 ? void 0 : images.projectImages[0] });
        count++;
        if (count == projects.length)
            return res.status(200).json({ data: total });
    }));
});
exports.getAllProjects = getAllProjects;
const getSelectProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.pname;
    const d = yield Project_1.default.findOne({ projectName: id }).exec();
    const i = yield Images_1.default.findOne({ projectName: id }).exec();
    if (!d) {
        return res.status(404).json({ data: 'not found' });
    }
    else {
        if (!i)
            return res.status(204).json({ data: { project: d, images: null } });
        else
            res.status(200).json({ data: { project: d, images: i.projectImages } });
    }
});
exports.getSelectProject = getSelectProject;
const sendMailAfterContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cname = req.body.name;
    const cemail = req.body.email;
    const desc = req.body.desc;
    console.log(cname, cemail, desc);
    let transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: "lummaoiscringe@gmail.com",
            pass: process.env.PASSWORD
        }
    });
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
    };
    transporter.sendMail(mailOptions, (err, success) => {
        if (err) {
            console.log("error is : ", err);
            return res.status(503).json({ 'message': 'mail not sent' });
        }
        else {
            console.log("success, email has been sent : ", success);
            res.status(200).json({ 'message': 'email sent successfully' });
        }
    });
});
exports.sendMailAfterContact = sendMailAfterContact;
