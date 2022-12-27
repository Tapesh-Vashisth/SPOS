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
exports.handlePostProject = exports.getImagesOfAllProject = exports.getImagesOfAProject = exports.getAllProjects = exports.setImagesOfAProject = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Project_1 = __importDefault(require("../models/Project"));
const Images_1 = __importDefault(require("../models/Images"));
const getImagesOfAProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const images = yield Images_1.default.findOne({ projectName: req.params.pname });
    if (!images)
        return res.status(404).json({ data: 'no images found for the projectid' });
    res.status(200).json({ docs: images === null || images === void 0 ? void 0 : images.projectImages });
});
exports.getImagesOfAProject = getImagesOfAProject;
const getImagesOfAllProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside this');
    const images = yield Images_1.default.find().exec();
    if (!images)
        return res.status(404).json({ data: 'no images found for the projectid' });
    res.status(200).json({ data: images });
});
exports.getImagesOfAllProject = getImagesOfAllProject;
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield Project_1.default.find().exec();
    let total = [];
    if (!projects) {
        return res.status(204).json({ data: 'no data exists' });
    }
    let count = 0;
    projects.map((x) => __awaiter(void 0, void 0, void 0, function* () {
        const images = yield Images_1.default.findOne({ projectName: x.projectName }).exec();
        total.push({ project: x, images: images });
        count++;
        console.log(total);
        if (count == projects.length)
            return res.status(200).json({ data: total });
    }));
});
exports.getAllProjects = getAllProjects;
let pid = 1567;
const handlePostProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pname = req.body.pname;
    const pdesc = req.body.pdesc;
    const ptitle = req.body.ptitle;
    const clientname = req.body.clientname;
    const status = req.body.status;
    console.log(pname, ptitle);
    const check = yield Project_1.default.findOne({ projectName: pname }).exec();
    if (!check) {
        const newproject = yield new Project_1.default({
            projectTitle: ptitle,
            projectDesc: pdesc,
            clientName: clientname,
            projectName: pname,
            status: status,
            projectId: pid
        });
        yield newproject.save();
        console.log(newproject);
        pid = pid + 9;
        return res.status(201).json({ data: newproject });
    }
    return res.status(204).json({ data: 'no' });
});
exports.handlePostProject = handlePostProject;
const setImagesOfAProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('in');
    var files;
    const f = req.files;
    console.log('file is ', f);
    console.log(req.params);
    f.forEach((e) => __awaiter(void 0, void 0, void 0, function* () {
        if ((e.mimetype === 'image/png' || e.mimetype === 'image/jpg' || e.mimetype === 'image/jpeg' || e.mimetype === 'application/pdf')) {
            const projectImage = yield Images_1.default.findOne({ projectName: req.params.pname });
            console.log(projectImage);
            const img = {
                data: fs_1.default.readFileSync(path_1.default.join(__dirname + `/../uploads/${e.filename}`)),
                contentType: `${e.mimetype}`
            };
            if (!projectImage) {
                const newImage = yield new Images_1.default({
                    projectName: req.params.pname,
                    projectImages: img
                });
                yield (newImage === null || newImage === void 0 ? void 0 : newImage.save());
            }
            else {
                // console.log(img);
                projectImage === null || projectImage === void 0 ? void 0 : projectImage.projectImages.push(img);
                yield (projectImage === null || projectImage === void 0 ? void 0 : projectImage.save());
            }
        }
    }));
});
exports.setImagesOfAProject = setImagesOfAProject;
