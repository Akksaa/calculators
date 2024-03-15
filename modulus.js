import inquirer from "inquirer";
import chalk from "chalk";
let num1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "write first number here:"
});
let num2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "write your second number here:"
});
let modulus = num1.num1 % num2.num2;
console.log((chalk.whiteBright(`Here is the Modulus result: ${modulus}`)));
