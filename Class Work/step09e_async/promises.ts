import inquirer from 'inquirer'

let MyBudget = await inquirer.prompt([{
    name: "Budget",
    type: "number",
    message: "Enter your Budget"
}])

let bookPurchase = new Promise(function(resolve, reject) {
    if(MyBudget.Budget >= 5000) {
        resolve("Lets Purchase the book")
    } else reject ("Sorry not right now")
})

bookPurchase.then(function(message) {
    console.log(message);
})

bookPurchase.catch(function(message) {
    console.log(message);
})
