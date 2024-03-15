import inquirer from "inquirer";
import chalk from "chalk";

let num1 = await inquirer.prompt({
     name: "weight",
     type: "number",
     message: "write your weight(In Kg) here:"
}); 

let num2 = await inquirer.prompt({
     name: "height",
     type:"number",
     message:"write your height(In Meters) here:"
});
 let modulus = num1.weight / (num2.height * num2.height);
 console.log((chalk.whiteBright(`Here is the BMI result: ${modulus}`)));