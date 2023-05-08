const inquirer = require("inquirer");
const operations = ["Add task", "List tasks", "Exit"];

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
const { add, start } = questionBank;
const promptUser = async (questions) => {
  try {
    const answers = await inquirer.prompt(questions);
    return answers;
  } catch (err) {
    console.log(err);
  }
};

const exit = () => {
  console.log("Closing app...Bye!");
  return;
};

// return string containing choice
const init = async () => {
  //   const newVar = questionBank.start
  const { task_choice } = await promptUser(start);

  if (task_choice === "Exit") {
    exit();
  } else {
    return task_choice;
  }
};

const createTask = async (arr) => {
  const new_task = await promptUser(add);
  arr.push(new_task);
  if (new_task) {
    console.log(`Successfully added new task:\n ${JSON.stringify(new_task)}`);
    init();
  }
};
const listTasks = (arr) => {
  console.log(...arr);
  init();
};
module.exports = {
  createTask,
  operations,
  listTasks,
  exit,
  init,
};
