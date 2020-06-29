//Realização operação bancária
const user = {
    name: "Eduardo",
    transactions: [],
    balance: 0
}

// Adicionar transações
function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Relatórios
function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for(let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}


createTransaction({ type: 'credit', value: 70 })
createTransaction({ type: 'credit', value: 99 })
createTransaction({ type: 'debit', value: 85 })
createTransaction({ type: 'debit', value: 40 })

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())