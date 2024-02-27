class Numbers {
    constructor(data) {
        // data can either be a string or an array of numbers
        if (typeof data === "string") {
            this.data = data.split(",").map((number) => Number(number));
        } else {
            this.data = data;
        }
    }

    count() {
        // return the count of numbers in data
        return this.data.length;
    }

    printNumbers() {
        // print the numbers in data along with their indexes
        this.data.forEach((number, index) => {
            console.log(`Index ${index}: ${number}`);
        });
    }

    odds() {
        // return the odd numbers in data
        return this.data.filter((num) => num % 2 !== 0);
    }

    evens() {
        // return the even numbers in data
        return this.data.filter((num) => num % 2 === 0);
    }

    sum() {
        // return the sum of the numbers
        return this.data.reduce((acc, num) => acc + num, 0);
    }

    product() {
        // return the product of the numbers
        return this.data.reduce((acc, num) => acc * num, 1);
    }

    greaterThan(target) {
        // return the numbers greater than the target
        return this.data.filter((num) => num > target);
    }

    howMany(target) {
        // return the count of a given number
        return this.data.filter((num) => num === target).length;
    }
}

// Prompt the user for a list of integers separated by commas
const str = prompt("Enter some numbers, like this", "1,2,3,3,5,9");

// Create an instance of Numbers
const number1 = new Numbers(str);

// Example usage
console.log("Count of numbers:", number1.count());
number1.printNumbers();
console.log("Odd numbers:", number1.odds());
console.log("Even numbers:", number1.evens());
console.log("Sum of numbers:", number1.sum());
console.log("Product of numbers:", number1.product());
console.log("Numbers greater than 3:", number1.greaterThan(3));
console.log("Count of number 3:", number1.howMany(3));

