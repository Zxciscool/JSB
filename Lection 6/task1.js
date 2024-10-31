/* Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок
 і повертає новий рядок, у якому кожен символ повторюється  двічі hello ⇒ hheelllloo. */

 function doubleLetter(str) {
    let doubled = ''; // Створюємо пустий рядок для збереження результату
    for (const char of str) {
        doubled += char.repeat(2); // Повторюємо кожен символ двічі
    }
    return doubled; // Повертаємо новий рядок
}

console.log(doubleLetter("hello")); // hheelllloo




