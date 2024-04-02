"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const answer = await inquirer_1.default.prompt([
    { message: "Enter First Number:",
        type: "number",
        name: "firstNumber" },
    { message: "Enter Second Number:",
        type: "number",
        name: "secondNumber" },
    { message: "Select one of the Operator to perform Operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation"] }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponentiation") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log(chalk_1.default.red("Invalid Operator!"));
}
