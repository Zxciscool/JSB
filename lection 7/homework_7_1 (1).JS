/* 
Створіть функцію reverseArray, яка приймає масив і повертає новий масив, 
елементи якого розташовані у зворотному порядку.
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1] */

function reverseArray(arr) {
    const reversed = []; // Створюємо новий масив для зворотних елементів
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Додаємо елементи з оригінального масиву в зворотному порядку
    }
    return reversed; // Повертаємо новий масив
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]