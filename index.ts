#! /usr/bin/env node

import inquirer from "inquirer";

let Words = await inquirer.prompt({
    name:"Paragraph",
    type:"input",
    message:"Enter Your Input Here."
});

let Num_of_words = Words.Paragraph.trim().split(" ");

console.log(`Your Input Contain "${Num_of_words.length}" Words`);
