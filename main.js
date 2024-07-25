import chalk from "chalk";
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.bold.magenta("\n \tWelcome!\n"));
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to Interact with?",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("You Approach the Staff Room. Please feel free to ask any Question.");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to talk with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New Student added");
                console.log("Current Student List:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Existing Student List:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log(chalk.bold.red("Exiting the Program...."));
            process.exit();
        }
    } while (true);
};
programStart(persons);
