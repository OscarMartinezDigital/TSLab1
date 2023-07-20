/* Define a function named calculateSum that takes two parameters, num1 and num2, both of type number. The function should calculate and return the sum of the two numbers. */
const calculateSum = (num1:number, num2: number):number => {
    return num1 + num2
}

console.log(calculateSum(3,3));

/* Define a function named isEven that takes a parameter num of type number. The function should return true if the number is even, and false otherwise. */
const isEven = (num:number): boolean => {
return num % 2 === 0
}

console.log(isEven(5));

/* Define a function named reverseString that takes a parameter str of type string. The function should return the reverse of the input string. */
const reverseString = (str: string):string => {
    let word = '';
    for (let index = str.length - 1; index >= 0; index--) {
        word += str[index]
    }
    return word
}

console.log(reverseString('Hello World'));

/* Define an arrow function named calculateAverage that takes an array of numbers nums as a parameter. The function should calculate and return the average of the numbers in the array. */

const calculateAverage = (nums:number[]): number => {
    if (nums.length === 0) {
        return 0
    }

    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}

console.log(calculateAverage([1,2,3,4,5]));

/* Define a function type named MathOperation that represents a function that takes two parameters of type number and returns a number.
 Use this type to declare a variable named multiply with the value of an arrow function that multiplies two numbers. */

type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b): number => {
    return a *b
}

console.log(multiply(3,5));
