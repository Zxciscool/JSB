/* Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції і повертає нову функцію, яка викликає їх послідовно з результатом попереднього виклику. Результат останньої функції має бути повернутий новою функцією. Кожна функція повинна мати доступ до результату попередньої функції через замикання. */

function sequence(...fns) {
    return function(...args) {
        return fns.reduce((result, fn) => fn(result), args[0]);
    }
}


const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const subtractThree = (x) => x - 3;

const processNumber = sequence(addOne, multiplyByTwo, subtractThree);

console.log(processNumber(5)); // Output: 7
console.log(processNumber(10)); // Output: 17