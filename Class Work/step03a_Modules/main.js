"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const First_1 = __importDefault(require("./First")); // Import my Name from First.ts 
const Second_1 = require("./Second");
console.log(First_1.default + " " + Second_1.age + " " + Second_1.gender);
