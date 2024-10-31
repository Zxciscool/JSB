
/* Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив,
 що містить тільки унікальні значення з обох масивів (без дублікатів).

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7] */

function uniqueValues(arr1, arr2) {
    // Об'єднуємо два масиви
    const combined = arr1.concat(arr2);
    // Використовуємо Set для отримання унікальних значень
    const uniqueSet = new Set(combined);
    // Повертаємо масив з унікальними значеннями
    return Array.from(uniqueSet);
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]


/* У цій функції:

Масиви arr1 та arr2 об'єднуються за допомогою методу concat.
Створюється новий Set, який автоматично видаляє дублікати.
Використовується Array.from, щоб перетворити Set назад у масив. */


