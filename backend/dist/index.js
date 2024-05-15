"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const redis_1 = require("redis");
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const client = (0, redis_1.createClient)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, express_1.urlencoded)({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Safe!" });
});
app.post("/problemlist", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prisma = new client_1.PrismaClient();
        const result = yield prisma.problemList.findMany({});
        return res.status(200).json(result);
    }
    catch (e) {
        console.log("Error: " + e);
    }
}));
app.post("/addProblems", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Reached");
        const { title, content, tag } = req.body;
        console.log("Reached2");
        const prisma = new client_1.PrismaClient();
        console.log("Reached3");
        yield prisma.problemList.create({
            data: {
                title,
                content,
                tag
            }
        });
        console.log("Reached4");
    }
    catch (e) {
        console.log("Error:" + e);
        return res.status(400).json({ message: "Failed to Add the Problem" });
    }
}));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected to Redis");
            app.listen(PORT, () => {
                console.log(`Server Running on Port ${PORT}`);
            });
        }
        catch (error) {
            console.error("Failed to connect to Redis", error);
        }
    });
}
startServer();
