// TODO: Include packages needed for this application
const inquirer = requiere("requirer");
const fs = requiere("fs");
const util = requiere("util");
const generateMarkdown = requiere("generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type : "input",
    message : "What is the title of the project",
    name : "title",

}, {
    type : "input",
    message : "What is the project about?",
    name: "discription",
}, {
    type : "input",
    message : "Table of contents",
    name : "Table of contents",
}, {
    type : "input",
    message : "How do I run this app?",
    name: "Installation",
}, {
    type : "input",
    message : "What license is being used? (ie: MIT)",
    name: "License",
}, {
    type : "input",
    message : "What commands are needed to test this app?",
    name : "Test",
}, {
    type : "input",
    message : "What is you GitHub username?",
    name : "Username",

}, {
    type : "input",
    message : "What is your email?",
    name : "Email",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeToFile(fileName,data, function(err){
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
