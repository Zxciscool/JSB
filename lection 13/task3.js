/* Напишіть функцію, яка приймає масив унікальних елементів і 
генерує всі можливі перестановки цього масиву. Використовуйте 
рекурсію для знаходження всіх перестановок. Наприклад, якщо
 вхідний масив [1, 2, 3], функція має повернути масив, 
 що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], 
 [2, 3, 1], [3, 1, 2] і [3, 2, 1].
 */

function generatePermutations(arr) {
    // Базовий випадок: якщо масив порожній або містить один елемент
    if (arr.length <= 1) {
        return [arr];
    }
    
    const result = [];
    
    // Перебираємо кожен елемент як перший
    for (let i = 0; i < arr.length; i++) {
        // Вибираємо поточний елемент
        const current = arr[i];
        
        // Створюємо масив без поточного елемента
        const remainingArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        
        // Рекурсивно генеруємо перестановки для решти масиву
        const permutations = generatePermutations(remainingArr);
        
        // Додаємо поточний елемент на початок кожної перестановки
        for (const permutation of permutations) {
            result.push([current, ...permutation]);
        }
    }
    
    return result;
}

// Приклади використання
console.log(generatePermutations([1, 2, 3]));
console.log(generatePermutations(['A', 'B', 'C']));