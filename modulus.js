"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let num1 = await inquirer_1.default.prompt({
    name: "num1",
    type: "number",
    message: "write first number here:"
});
let num2 = await inquirer_1.default.prompt({
    name: "num2",
    type: "number",
    message: "write your second number here:"
});
let modulus = num1.num1 % num2.num2;
console.log((chalk_1.default.whiteBright(`Here is the Modulus result: ${modulus}`)));
