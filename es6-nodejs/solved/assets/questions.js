const inquirer = require("inquirer");

// LIST OF OPERATIONS FOR APP
const operations = ["Add task", "List tasks", "Exit"];

// QUESTION BANK
const questionBank = {
  start: {
    type: "list",
    name: "task_choice",
    message: "What would you like to do?",
    choices: operations,
  },
  add: [
    { type: "input", name: "title", message: "Enter name of task:" },
    {
      type: "input",
      name: "description",
      message: "Enter description of task:",
    },
    {
      type: "list",
      name: "importance",
      choices: ["Low", "Medium", "High", "Urgent"],
      message: "Enter level of importance:",
    },
  ],
};

// DESTRUCTURING OBJECTS
const { add } = questionBank;

// ** DEFINING FUNCTIONS **

// PROMPT USER FOR QUESTIONS
const promptUser = async (questions) => {
  const userInput = await inquirer.prompt(questions);
  return userInput;
};

// EXIT PROGRAM
const exit = () => {
  console.log("Closing app...Bye!");
  return;
};

// CONFIRM THAT THEY'RE DONE


// CREATE A NEW TASK
const createTask = async (arr) => {
  const new_task = await promptUser(add);
  arr.push(new_task);
  if (new_task) {
    console.log(`Successfully added new task:\n ${JSON.stringify(new_task)}`);
  }
};

// LIST ALL TASKS
const listTasks = (arr) => {
  console.log(...arr);
};

// EXPORT MODULE
module.exports = {
  createTask,
  operations,
  listTasks,
  exit,
  questionBank,
  //   ,
};
