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
// var addTask = questionBank.add; --> Equivalent

// ** DEFINING FUNCTIONS **

// PROMPT USER FOR QUESTIONS --> input: array | output: string

// inquirer.prompt({
//   type: "input",
//   name: "testing",
//   message: "What is your name?",
// }).then((answer)=>{
//   console.log(answer)
// });

const promptUser = async (questions) => {
  const userInput = await inquirer.prompt(questions);
  return userInput;
};
// promptUser(start);

// CREATE A NEW TASK --> input: array | output: string
const createTask = async () => {
  const new_task = await promptUser(add);
  console.log(new_task);
  // arr.push(new_task);
  if (new_task) {
    console.log(`Successfully added new task:\n ${JSON.stringify(new_task)}`);
    return new_task;
  }
};



// EXPORT MODULE
module.exports = {
  createTask,
  operations,
  questionBank,
};
