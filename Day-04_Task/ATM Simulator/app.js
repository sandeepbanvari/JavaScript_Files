let balance = 10000;

let choice = Number(prompt(`
ATM MENU

1. Check Balance
2. Withdraw Money
3. Deposit Money
4. Exit

Enter your choice:
`));

if (choice === 1) {
    alert("Your Balance: ₹" + balance);

} else if (choice === 2) {

    let amount = Number(prompt("Enter withdrawal amount:"));

    if (amount <= 0) {
        alert("Invalid Amount!");
    } else if (amount > balance) {
        alert("Insufficient Balance!");
    } else {
        balance -= amount;
        alert("Withdrawal Successful!\nRemaining Balance: ₹" + balance);
    }

} else if (choice === 3) {

    let amount = Number(prompt("Enter deposit amount:"));

    if (amount <= 0) {
        alert("Invalid Amount!");
    } else {
        balance += amount;
        alert("Deposit Successful!\nUpdated Balance: ₹" + balance);
    }

} else if (choice === 4) {

    alert("Thank you for using ATM!");

} else {

    alert("Invalid Option!");

}