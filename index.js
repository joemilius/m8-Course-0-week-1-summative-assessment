// Your code goes here

let totalItemsSold = 0
let totalIncome = 0
let items = [{name: 'Spark Plug', amount: 10, price: 10.49}, {name: 'Alternator', amount: 8, price: 269.99}, {name: 'Air Filter', amount: 17, price: 21.99}]

function itemSold(itemName){
    for (let item of items){
        if(item.name === itemName){
            totalIncome += item.price
            totalItemsSold++
            item.amount -= 1
        }
    }
    return items
}

function billTotal(customerOrder){
    let total = 0
    for(let item of customerOrder){
        total += item.price
    }
    return total
}