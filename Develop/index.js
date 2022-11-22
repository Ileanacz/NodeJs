// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type : "input",
    message : "What is the title of the project",
    name : "title",

}, {
    type : "input",
    message : "What is the project about?",
    name: "description",
}, {

    type : "input",
    message : "How do I run this app?",
    name: "installation",
}, {
    type : "list",
    message : "What license is being used? (ie: MIT)",
    name: "license",
    choices: [
        "MIT", "APACHE", "GNU"
    ]
}, {
    type : "input",
    message : "What commands are needed to test this app?",
    name : "test",
}, {
    type : "input",
    message : "What is you GitHub username?",
    name : "username",

}, {
    type : "input",
    message : "What is your email?",
    name : "email",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,data, function(err){
        console.log(fileName)
        console.log(data)
        if(err){
            return console.log(err)
        } else{
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
