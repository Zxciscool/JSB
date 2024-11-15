/* Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок. Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення. Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно. */


function counter(startValue, step) {
    let count = startValue;

    const counterFunc = function() {
        return count;
    };

    counterFunc.increment = function() {
        count += step;
        return count;
    };

    counterFunc.decrement = function() {
        count -= step;
        return count;
    };

    counterFunc.reset = function() {
        count = startValue;
        return count;
    };

    return counterFunc;
}

const myCounter = counter(0, 2);
console.log(myCounter()); // Output: 0
console.log(myCounter.increment()); // Output: 2
console.log(myCounter()); // Output: 2
console.log(myCounter.decrement()); // Output: 0
console.log(myCounter.reset()); // Output: 0