"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const ImageSchema = new schema({
    projectName: { type: String, required: true },
    projectImages: [
        {
            data: Buffer,
            contentType: String
        }
    ]
}, { versionKey: false });
exports.default = mongoose_1.default.model('Images', ImageSchema);
