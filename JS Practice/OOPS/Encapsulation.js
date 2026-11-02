
class Bank {

    #balance = 5000;

    // Deposit
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log("Balance is: " + this.#balance);
        } else {
            console.log("Invalid amount!");
        }
    }

    // Withdraw
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Balance is: " + this.#balance);
        } else {
            console.log("Insufficient balance or invalid amount!");
        }
    }

    // Check Balance
    checkBalance() {
        console.log("Current balance: " + this.#balance);
    }
}

const bank = new Bank();

let choice;

do {
    choice = Number(prompt(
        "1. Bank Deposit\n" +
        "2. Bank Withdraw\n" +
        "3. Check Balance\n" +
        "4. Exit\n" +
        "Enter your choice:"
    ));

    switch (choice) {

        case 1: {
            let depositAmount = Number(prompt("Enter amount to deposit:"));
            bank.deposit(depositAmount);
            break;
        }

        case 2: {
            let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
            bank.withdraw(withdrawAmount);
            break;
        }

        case 3:
            bank.checkBalance();
            break;

        case 4:
            console.log("Exiting...");
            break;

        default:
            console.log("Invalid choice!");
    }

} while (choice !== 4);
