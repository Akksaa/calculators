"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let num1 = await inquirer_1.default.prompt({
    name: "weight",
    type: "number",
    message: "write your weight(In Kg) here:"
});
let num2 = await inquirer_1.default.prompt({
    name: "height",
    type: "number",
    message: "write your height(In Meters) here:"
});
let modulus = num1.weight / (num2.height * num2.height);
console.log((chalk_1.default.whiteBright(`Here is the BMI result: ${modulus}`)));
