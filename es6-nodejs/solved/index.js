// import packages
const inquirer = require("inquirer");
const fs = require("fs");
const {
  createTask,
  operations,
  listTasks,
  questionBank,
  exit,
} = require("./assets/questions");

// Task Manager

// Initialize application

// DESTRUCTURING ARRAYS
const [addTask, listAll, exitApp] = operations;
let taskList = [];
const { start } = questionBank;


const manageTasks = async (input) => {
  // extra --> figure out how to keep the app going until user exits

  switch (input) {
    case addTask:
      createTask(taskList);
      break;
    case listAll:
      listTasks(taskList);
      break;
    case exitApp:
      exit();
      break;

    default:
      break;
  }
};

inquirer.prompt(start).then((ans) => {
  manageTasks(ans.task_choice);
});

//const continuePrompt = async () => {
  //   const confirm = await promptUser({
  //     type: "confirm",
  //     name: "continue",
  //     message: "Would you like to add another",
  //   });
  
  //   return confirm.continue;
  // };