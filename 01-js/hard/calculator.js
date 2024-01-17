/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  result;

  constructor () {
    this.result = 0;
  }

  add = (number) => {
    try {
      this.result = this.result + number;
    }
    catch (err) {
      throw err;
    }
  }

  subtract = (number) => {
    try {
      this.result = this.result - number;
    }
    catch (err) {
      throw err;
    }
  }

  multiply = (number) => {
    try {
      this.result = this.result * number;
    }
    catch (err) {
      throw err;
    }
  }

  divide = (number) => {
    try {
      this.result = this.result/number;
    }
    catch (err) {
      throw err;
    }
  }

  clear = () => {
    this.result = 0;
  }

  getResult = () => {
    return result;
  }

  calculate = (expr) => {
    // throw error if calculation contains alphabets
    const containsLetters = ( /^[a-zA-Z]+$/).test(expr);
    if(containsLetters) throw 'Cannot contain alphabets';

    let entry = '';
    
    const isNumber = (s) => {
      return !isNaN(s);
    }

    const performOperation = (operation, number) => {
      switch(operation) {
        case 'add':
          this.add(number);
        case 'subtract':
          this.subtract(number);
        case 'multiply':
          this.multiply(number);
        case 'divide':
          this.divide(number);
      }
    }

    const bracketsStack = [];
    const operationsStack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
    const operations = {
      '+': 'add',
      '-': 'subtract',
      '*': 'multiply',
      '/': 'divide'
    };

    for(let char of expr) {
      console.log(char);
      // when char is a number
      if (isNumber(char)) {
        console.log(`${char} is number`);
        entry += char; 
      }
      // when char is a bracket
      else if (brackets[char]) {
        console.log(`${char} is a bracket`);
        bracketsStack.push(char);

      }
      // when char is one of arithmetic operations
      else if (operations[char]) {
        console.log(`${char} is an operation`);
        const number = Number(entry);
        const operation = operations[char];

        // when its the first number in the arithmetic expression
        if(this.result === 0) {
          this.result = number;
          entry = '';
          operationsStack.push(operation);
        }
        else {
          console.log(operation);
          if(operationsStack.length === 1) {
            const operationToPerform = operationsStack.pop();
            performOperation(operationToPerform, number);
          }
          else {
            operationsStack.push(operation);
          }
        }
      }
    }

    console.log(`result: ${this.result}`);
  }
}

module.exports = Calculator;
