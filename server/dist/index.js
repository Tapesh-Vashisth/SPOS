"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5500;
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', methods: ["GET", "POST", "PUT", "DELETE"], credentials: true, exposedHeaders: ['Set-Cookie', 'Date', 'ETag'] }));
// routes
app.use('/projects', userRoutes_1.default);
app.use('/admin', adminRoutes_1.default);
mongoose_1.default.connect('mongodb+srv://spos:spos123@cluster0.mb5no7j.mongodb.net/data?retryWrites=true&w=majority').then(() => {
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    });
}).catch(err => console.log('some error in connecting'));
