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
exports.AdminRoute = void 0;
const express_1 = require("express");
const db_1 = __importDefault(require("../db/db"));
const route = (0, express_1.Router)();
exports.AdminRoute = route;
route.post("/addProblems", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, tag } = req.body;
        yield db_1.default.problemList.create({
            data: {
                title,
                content,
                tag
            }
        });
        return res.status(200).json({ message: "Added Your Problem Successfully!" });
    }
    catch (e) {
        console.log("Error:" + e);
        return res.status(400).json({ message: "Failed to Add the Problem" });
    }
}));
