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