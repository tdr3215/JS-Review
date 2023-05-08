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
const { add, start } = questionBank;

// ** DEFINING FUNCTIONS **

// PROMPT USER FOR QUESTIONS
const promptUser = async (questions) => {
  try {
    const answers = await inquirer.prompt(questions);
    return answers;
  } catch (err) {
    console.log(err);
  }
};

// EXIT PROGRAM
const exit = () => {
  console.log("Closing app...Bye!");
  return;
};

// INITIALIZE APP
const init = async () => {
  /*   
  DESTRUCTURING THE ANSWER
  */

  const { task_choice } = await promptUser(start);
  //   same as --> const task = promptUser(start).task_choice
  if (task_choice === "Exit") {
    exit();
  } else {
    return task_choice;
  }
};

// CREATE A NEW TASK
const createTask = async (arr) => {
  const new_task = await promptUser(add);
  arr.push(new_task);
  if (new_task) {
    console.log(`Successfully added new task:\n ${JSON.stringify(new_task)}`);
    init();
  }
};

// LIST ALL TASKS
const listTasks = (arr) => {
  console.log(...arr);
  init();
};

// EXPORT MODULE
module.exports = {
  createTask,
  operations,
  listTasks,
  exit,
  init,
};
