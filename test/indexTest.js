require ( './root.js' );

describe('Variable Declarations', function(){
    it("The variable called totalItemsSold exists and starts at the value of 0", function(){
        expect(totalItemsSold).to.eql(0);
    });

    it("The variable called totalIncome exists and starts at a value of 0", function(){
        expect(totalIncome).to.eql(0);
    });

    it("The variable called items exists and is assigned the value of [{name: 'Spark Plug', amount: 10, price: 10.49}, {name: 'Alternator', amount: 8, price: 269.99}, {name: 'Air Filter', amount: 17, price: 21.99}]", function(){
        expect(items).to.deep.include.members([
            {name: 'Spark Plug', amount: 10, price: 10.49}, 
            {name: 'Alternator', amount: 8, price: 269.99}, 
            {name: 'Air Filter', amount: 17, price: 21.99}
        ]
        )
    });
})

describe("Function Declarations", function(){
    describe("itemSold(itemName)", function(){
        it("deceases the amount in the item object that has a name that matches the argument and returns the updated array", function(){
            expect(itemSold("Air Filter")).to.deep.include.members([
                {name: "Spark Plug", amount: 10, price: 10.49}, 
                {name: "Alternator", amount: 8, price: 269.99}, 
                {name: "Air Filter", amount: 16, price: 21.99}])
    
            expect(window.totalItemsSold).to.eql(1)
        })
        it("increases the totalItemSold variable by 1", function(){
            expect(window.totalItemsSold).to.eql(1)
        } )
        it("increases the totalIncome variable by the price of the item", function(){
            expect(window.totalIncome).to.eql(21.99)
        } )
        it("does not update the items array if the string passed in does not match any item name", function(){
            expect(itemSold("X Box")).to.deep.include.members([
                {name: "Spark Plug", amount: 10, price: 10.49}, 
                {name: "Alternator", amount: 8, price: 269.99}, 
                {name: "Air Filter", amount: 16, price: 21.99}])
        })
        it("does not increase the totalItemSold variable by 1 if the string passed in does not match any item name", function(){
            expect(window.totalItemsSold).to.eql(1)
        } )
        it("increases the totalIncome variable by the price of the item if the string passed in does not match any item name", function(){
            expect(window.totalIncome).to.eql(21.99)
        } )
    })
    describe("billTotal(customerOrder)", function(){
        it("iterates through the array of items the customer is buying and adds the prices together, then returns the total", function(){
            expect(billTotal([{name: "Spark Plug", price: 10.49}, {name: "Alternator", price: 269.99}])).to.eql(280.48)
        })
    })

})