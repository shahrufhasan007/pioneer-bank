/**
 * Login button event handler
 */
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

/**
 * deposit button event handler
 */
const depositButton = document.getElementById("addDeposit");
depositButton.addEventListener("click", function() {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
});
/**
 * withdraw Functionality
 */
const withdrawButton = document.getElementById("addWithdraw");
document.addEventListener("click", function() {
    const withdrawNumber = getInputNumber("withdrawAmount");
    console.log(withdrawNumber);
});

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}
/**
 * Balance updater
 */