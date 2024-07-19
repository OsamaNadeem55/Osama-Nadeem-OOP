import inquirer from "inquirer";
import chalk from "chalk";

//create class

class Person{
    private _personality:string;
    
    constructor(){
        this._personality = "Mystery";
    }
//user input

userInput (input:string){
if(input.includes('talk to other about yourself openly')){
    this._personality = 'Talk Happy';
}
else if(input.includes('Keep your word to yourself')){
    this._personality = 'Talk Rudely';
}
}
// return function
get personality(){
    return this._personality;
}
}

//create objects
class Main {
    public async main() {
        const ans = await inquirer.prompt([{
            name: "choice",
            type: "list",
            message: chalk.yellow('Tell me your behaviour?'),
            choices: [
                `1: talk to others about my self .`,
                '2: Keep silent and dont ask questions.',
            ]
        }]);
        let myPerson = new Person();
        myPerson.userInput(ans.choice);

        console.log(`You are ${myPerson.personality}`);
    }
}

const obj = new Main();
obj.main();