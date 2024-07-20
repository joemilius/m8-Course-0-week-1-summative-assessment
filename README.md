# M8-Course-0-Week-1-Summative-Assessment

## Set Up
To begin this lab you will need to fork and clone this lab to your computer.
Next you will need to navigate to the lab’s directory with the 
cd
 Command.
Once you have navigated to the directory you will open the lab in your text editor (for VS Code the command is: code . ).
Then in the terminal at the labs directory you can run npm install to install all the dependencies needed for the lab.
As you work through the deliverables of the lab you can run npm test in the terminal to gain extra insight as to what to change in the code file.

To work through the deliverables open the index.js file.  This is the file your code will be built into.

## Processes

The processes you have learned throughout this module are provided below to remind you how to think about different ways to approach code.

Programming Problem-Solving Process
1. Understand the problem
2. Plan the solution
3. Implement the solution
4. Test and debug

Process of Using Expressions
1. Identify the variables and values involved in the calculation.
2. Determine the operators needed to perform the desired computations.
3. Construct the expression by combining variables, values, and operators.
4. Evaluate the expression to obtain the result.

Process for Working with Variables and Data Types in JavaScript
1. Understand Variables
2. Declaration and Assignment
3. Naming Conventions
4. Explore Data Types
5. Primitive vs. Non-Primitive Types
6. Variable Reassignment
7. Choosing let, const, or var

Process of using functions
1. Defining a Function
2. Writing the Function Body
3. Calling the Function
4. Reusing the Function
5. Modifying Function Behavior

Process for Utilizing Statements:
1. Recognizing the Comment Marker
2. Adding Comments to Code
3. Using Selection Statements (Conditionals)
4. Understanding the Switch Statement
5. Implementing Repetition with while Loops
6. Using Control-C to Break Infinite Loops
7. Terminating Loops Naturally
8. Operators for Incrementing and Decrementing

Process of Arrays
1. Declare the Array: Start by defining the array and assigning it a name.
2. Add Elements: Populate the array with individual pieces of data.
3. Access Elements: Retrieve specific elements from the array using their index.
4. Modify Elements: Update or change the values of elements within the array.
5. Remove Elements: Delete elements from the array as needed

Process of Working With Objects
1. Declare an Object: create a variable with an object assigned to it
2. Add Properties: create key/value pairs inside the object
3. Access Properties: retrieve the value stored in the object through the key
4. Modify Properties: change the value of a key
5. Remove Properties: delete a key/value pair

## Tools and Resources
- Text Editor (VS Code suggested)
- Pseudo Code
- Defining variables and functions
- Using loops and conditional statements
- Manipulating data structures (arrays and objects)
- Console.log and debugger for debugging code

## Instructions

### Scenario

You are working for Flatiron Auto Parts and they need a program that will keep track of their income and their inventory.

The company needs to know how many items they have sold all together.
Declare a variable called totalItemsSold to store the total number of items sold (the value of this variable will have to be changed) with a starting value of 0.

The company needs to know how much money they have made altogether.
Declare a variable called totalIncome to store the total income from the items sold (the value of this variable will have to be changed) with a starting value of 0.

The company needs to keep track of the information of all the items in its inventory.
Declare a variable called items that will store all the items in the store in an array of objects
The items (or objects) that should be included in the are:
{name: “Spark Plug”, amount: 10, price: 10.49}
{name: “Alternator”, amount: 8, price: 269.99}
{name: “Air Filter”, amount: 17, price: 21.99}

The company needs to update its inventory and its totals to keep track of its progress.
Declare a function called itemSold that takes in the name (a string) of the item sold as an argument.  Inside this function the code should loop through the array of items.  If the argument matches the name of one of the items in the array, then the amount of that item should be reduced by 1, the totalItemsSold variable should increment by 1, and the total income should have the price of the item added to it.  After the loop has been completed, then the array of items should be returned.

When customers buy things from the store the company needs to provide the customer with a bill that shows the total amount of money that the customer has to pay.
Declare a function called billTotal that takes in an array of items that the customer has purchased as an argument.  Inside the function declare a variable to store the customer’s total.  Then loop through the array of items that the customer has purchased and add the price to the variable you have created.  After the loop has completed then return the variable that has the total price of the customer’s order.
