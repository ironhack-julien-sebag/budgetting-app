// Variables
const balanceElement = document.getElementById("balance") // Total balance
const valueInputElement = document.querySelector("input") // Value input
const selectElement = document.querySelector("select") // Income / expense
const additionButtonElement = document.querySelector("footer button") // Addition button
const entryListElement = document.querySelector("section ul") // Entry list

const entryDescriptionElement = document.querySelector("#elementDescription")

function addEntry(amount, description, operation) {
    // Create list element
    const listEntry = document.createElement("li")

    // Entry value
    const listEntryValue = document.createElement("strong")
    listEntryValue.innerText = `${amount}$`
    // Same as
    // listEntryValue.innerText = amount + "$"

    // Description text
    const listEntryDescription = document.createElement("em")
    listEntryDescription.innerText = description ? description : operation.charAt(0).toUpperCase() + operation.slice(1)

    // Operator
    const listEntryOperator = document.createElement("span")
    listEntryOperator.innerText = operation === "income" ? "+" : "-"
    // Same as
    // if (operation === "income") {
    //     listEntryOperator.innerText = "+"
    // } else {
    //     listEntryOperator.innerText = "-"
    // }

    // Add class
    listEntry.classList.add(operation)

    // Elements to add to li
    listEntry.appendChild(listEntryDescription)
    listEntry.appendChild(listEntryOperator)
    listEntry.appendChild(listEntryValue)

    // Element to add to ul
    entryListElement.appendChild(listEntry)
}

function updateBalance() {
    let totalBalance = 0

    for (let item of entryListElement.children) {
        const valueElement = item.querySelector("strong")
        const operationElement = item.querySelector("span")

        const newValue = parseInt(valueElement.innerText)
        const totalOperation = operationElement.innerText

        if (totalOperation === "+") {
            totalBalance += newValue
        } else if (totalOperation === "-") {
            totalBalance -= newValue
        }
    }

    balanceElement.innerText = totalBalance + "$"
}



additionButtonElement.onclick = function () {
    const amount = valueInputElement.value
    const description = entryDescriptionElement.value
    const operation = selectElement.value

    if (amount) {
        addEntry(amount, description, operation)
    } else {
        alert("You should enter a value!")
    }

    valueInputElement.value = ""
    entryDescriptionElement.value = ""

    updateBalance()
}


// To do
// Add button to remove entry
// Add names / users
// Balance for each users
// Save in cache