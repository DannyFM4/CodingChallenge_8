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