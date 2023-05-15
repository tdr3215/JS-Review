const fs = require("fs");
const inquirer = require("inquirer");
const { questionBank,createTask } = require("./assets/questions");

// Make function that runs the application

const {start,add} = questionBank
inquirer.prompt(start).then((answer)=>{

    switch (answer.task_choice) {
        case "Add task":
          createTask();
          break;
        // case listAll:
        //   listTasks(taskList);
        //   break;
        // case exitApp:
        //   exit();
        //   break;
    
        default:
          break;
      }
})


fs.writeFileSync