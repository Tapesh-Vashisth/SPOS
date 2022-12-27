"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const ProjectSchema = new schema({
    projectName: { type: String, required: true },
    projectId: Number,
    projectDesc: { type: String },
    clientName: { type: String },
    status: { type: String }
}, { versionKey: false });
exports.default = mongoose_1.default.model('Project', ProjectSchema);
