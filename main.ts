#! /usr/bin/env node

import inquirer from "inquirer";



const randomNumber =Math.floor(Math.random()* 10);

const answers = await inquirer.prompt([
  {
    name:"userGuessedNumber",
    type: "number",
    message:"please guess a number 1-10:",
  },  
]);
if(answers.userGuessedNumber === randomNumber){
console.log("congtratulations! you guessed right number.")
}else {
    console.log("you guessed wrong number");

}


