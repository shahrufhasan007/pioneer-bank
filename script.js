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
 * withdraw Button handler
 */
const withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener("click", function() {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
});
/**
 * input amount and changed string to integer function
 */
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
/**
 * amount element update function
 */
function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + addedNumber;
    document.getElementById(id).innerText = total;
}