#! /usr/bin/env node



// SIMPLE CALCULATER

//Modules
import inquirer from "inquirer"; 
import chalk from "chalk";

// Questions
let ans = await inquirer.prompt([

{
    message: chalk.bgCyanBright.blackBright("Enter first number: "),
    type: "number",
    name: "first",
},

{
    message: chalk.bgMagenta("Select Operator! "),
    type: "list",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","Division",
              "Exponent","Remainder"]
},

{
    message: chalk.bgCyanBright.blackBright("Enter second number: "),
    type: "number",
    name: "second",
}

])

// CONDITIONS
if(ans.operator==="Addition")
{
    console.log(chalk.bgBlackBright.yellowBright("Answer:"+" ",ans.first+ans.second))
}

else if(ans.operator==="Subtraction")
{
    console.log(chalk.bgBlackBright.yellowBright("Answer:"+" ",ans.first-ans.second))
}

else if(ans.operator==="Multiplication")
{
    console.log(chalk.bgBlackBright.yellowBright("Answer:"+" ",ans.first*ans.second))
}

else if(ans.operator==="Division")
{
    console.log(chalk.bgBlackBright.yellowBright("Answer:"+" ",ans.first/ans.second))
}

else if(ans.operator==="Exponent")
{
    console.log(chalk.bgBlackBright.yellowBright("Answer:"+" ",ans.first**ans.second))
}

else if(ans.operator==="Remainder")
{
    console.log(chalk.bgBlackBright.yellowBright("Answer:"+" ",ans.first%ans.second))
}

else
{
    console.log(chalk.bgBlackBright.yellowBright("Select atleast one operartor!!!"))
}
