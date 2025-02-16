// Task 1: Function Declaration

// the lines below create a function that calculates the net salary of an employee
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // creates an equation for the function
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // logs the result in the console
};


// lines below ren the function using the parameters provided
calculateSalary(5000, 500, 0.1);
calculateSalary(7000, 1000, 0.15);


// Task 2: Function Expression

// the lines below create a function to calculate the discount of a purchase
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);  // creates the equation that will be used in the function
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); // logs the result in the console
};


// the lines below run the function using the parameters provided
calculateDiscount(100, 0.2);
calculateDiscount(250, 0.15);


// Task 3: Arrow Function

// the lines below create a function to calculate the service fee
const calculateServiceFee = (amount, serviceType) => {
    let serviceFee = 0;
    if (serviceType === "Premium") serviceFee = amount * .15; // lines 34-36 use an if else statement to determine the percentage based on the service type
    else if (serviceType === "Standard") serviceFee = amount * .1;
    else serviceFee = amount * .05;

    // line 39 logs the result in the console
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`);
};


// the lines below run the function using the parameters provided
calculateServiceFee(200, "Premium");
calculateServiceFee(500, "Standard");


// Task 4: Parameters and Arguments

// the lines below create a function that calculates the total rental cost
function calculateRentalCost(days, carType, insurance = false) {
    let carPrice = {"Economy": 40, "Standard": 60, "Luxury": 100};
    let rentalCost = (carPrice[carType] * days); // declares the equation and the amount to use by considering the car type

    // uses an if function to declare how much insurance is, if the person chooses to use insurance
    if (insurance === true) {
        rentalCost += (20*days);
    };

    // line 61 logs the result in the console
    console.log(`Total Rental Cost: $${rentalCost}`);
};


// the lines below run the function using the parameters provided
calculateRentalCost(3, "Economy", true);
calculateRentalCost(5, "Luxury", false);


// Task 5: Returning Values

// the lines below create a function to calculate the total loan payment
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = (principal + (principal * rate * time)).toFixed(2); // this line declares the equation to use and logs the result under a variable
    return `Total Payment: $${totalPayment}`; // this lines returns the outcome in a template literal form
};


// the lines below run the function using the parameters provided
console.log(calculateLoanPayment(1000, 0.05, 2));
console.log(calculateLoanPayment(5000, 0.07, 3));


// Task 6: Higher-Order Functions

let transactions = [200, 1500, 3200, 800, 2500]; // declares an array

// lines below create a function that filters all transactions above 1000
function filterLargeTransactions(transactions, filterFunction) {
    let filteredTransactions = transactions.filter(filterFunction); // this line uses the filter method to filter the array

    // line 93 logs the filtered array in the console
    console.log(filteredTransactions);
};


// runs the function using the parameters provided
filterLargeTransactions(transactions, amount => amount > 1000);


// Task 7: Closures

// the lines below create a function to track the total cart value
function createCartTracker() {
    let shoppingCart = 0;

    return function(item) {
        shoppingCart += item; // this line adds each item to the last
        return `Total Cart Value: $${shoppingCart}`;
    };
};


//line 115 assigns the function to the variable cart
let cart = createCartTracker();

// the lines below run the function using parameters provided and log it in the console
console.log(cart(20)); 
console.log(cart(35));


// Task 8: Recursion in JavaScript

// the lines below create a function that projects the amount of saving after a certain amount of years
function calculateSavings(years, amount) {
    if (years >= 10) return amount; // will return the amount if years is greater than or equal to 10
    return calculateSavings(years + 1, amount * 1.05); // gives the equation for if the years is less than 10
};


// the lines below run the function using the parameters provided, then log it in the console
console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`);
console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`);