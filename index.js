import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue(`********************** wellcome to the student managing system ************** `));
let students = [];
let condition = true;
while (condition) {
    let studentList = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "Enter your full name"
        },
        {
            name: "addMore",
            type: "confirm",
            default: "false",
            message: "Do you want to add more students names in the list"
        }
    ]);
    let { add, addMore } = studentList;
    condition = addMore;
    if (add) {
        students.push(add);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (students.length > 0) {
    console.log("all students names: ");
    students.forEach(add => {
        console.log(add);
    });
}
else {
    console.log("your list is empty");
}
let id = "123456789010";
let pass = "";
for (let i = 0; i < 5; i++) {
    let rendom = Math.floor(Math.random() * id.length);
    pass += id[rendom];
}
students.forEach(ClipboardItem => {
    return pass;
});
console.log(`student ID  ${pass}`);
let courses = await inquirer.prompt([
    {
        name: "coursesName",
        message: " which courses do you want to enroll in ",
        type: "list",
        choices: ["javascript", "python", "java", "c", "c++", "none"]
    }
]);
let balance = 10000;
console.log(`your account balance is ${balance}`);
if (courses.coursesName == "none") {
    console.log("kindly select any of the courses");
}
let courcefees = courses.coursesName.length * 4000;
let remaningBalence = balance - courcefees;
let manu = await inquirer.prompt([
    {
        name: "viewManu",
        message: "show status or Exit",
        type: "list",
        choices: ["show status", "Exit"]
    }
]);
if (manu.viewManu == "show status") {
    console.log(chalk.red(`*************** Show Status ********************`));
    console.log(`student name is ${chalk.green(students)}`);
    console.log(`student ID is ${chalk.green(pass)}`);
    console.log(`this is the balance ${chalk.green(balance)}`);
    console.log(`the remanig balance is ${chalk.green(remaningBalence)}`);
    console.log(`this is the course that student enrolled in ${chalk.green(courses.coursesName)}`);
}
else if (manu.viewManu == "Exit") {
    console.log(chalk.red(`++++++++++++++++ Exit +++++++++++++++++++`));
}
