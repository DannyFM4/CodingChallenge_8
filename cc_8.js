// Task 1: Function Declaration

// the lines below create a function that calculates the net salary of an employee
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // creates an equation for the function
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // logs the result in the console
};


// lines below ren the function using the parameters provided
calculateSalary(5000, 500, 0.1);
calculateSalary(7000, 1000, 0.15);