// import packages
const inquirer = require("inquirer");
const fs = require("fs");
const {
  createTask,
  operations,
  init,
  listTasks,
  exit,
} = require("./assets/questions");

// Task Manager

// Initialize application

const [addTask, listAll, exitApp] = operations;
let taskList = [];

const manageTasks = async () => {
  let userInput = await init();
  // extra --> figure out how to keep the app going until user exits

  switch (userInput) {
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

manageTasks();
