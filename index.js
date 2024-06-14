#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow(`\n<==== WELCOM TO CURRENCY CONVERTER CLI PROJECT ====>`));
let currency = {
    USD: 1, // base currency
    PKR: 279.72,
    Saudi_Riyal: 3.75,
    Indian_Rupee: 83.36,
    Euro: 0.93,
};
let myLoop = true;
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            message: chalk.redBright("Select A currency you want to convert From"),
            choices: ["USD", "PKR", "Saudi_Riyal", "Indian_Rupee", "Euro"],
        },
        {
            type: "list",
            name: "to",
            message: chalk.blue("Select A currency you want to convert into"),
            choices: ["USD", "PKR", "Saudi_Riyal", "Indian_Rupee", "Euro"],
        },
        {
            type: "number",
            name: "amount",
            message: chalk.cyanBright("Enter Amount you want convert!"),
        },
    ]);
    //destructuring
    let { from, to, amount } = userInput;
    // getting a amount/value of from and to currencies
    let fromAmount = currency[from];
    let toAmount = currency[to];
    // now convert user's currency into base currency which is USD in our case,
    let baseCurrency = amount / fromAmount;
    let convertedAmount = baseCurrency * toAmount;
    // now we want limit the digits after decimal
    let finalOutput = convertedAmount.toFixed(2);
    console.log(`\n${from} amount ${amount} converted ${to} = ${finalOutput}`);
    // now we want to ask user if he wants more conversions?
    let convertAgain = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: chalk.blackBright("Do you want more conversions?"),
        default: false
    });
    if (!convertAgain.more) {
        myLoop = false,
            console.log(chalk.greenBright(`\nThank you for using our Currency Converter App!`));
    }
}
