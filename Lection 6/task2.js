/* Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок,
 число, що є довгим рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок,
  якщо це буде потрібно, четвертим параметром є буремний «прапор», чи додавати символи зліва 
  або справа(за замовчуванням). Якщо 2 параметр менше, ніж довжина вихідного рядка, 
  то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.
   */

  function padString(str, length, symbol, toLeft = false) {
    // Якщо довжина вихідного рядка більша або дорівнює заданій, повертаємо рядок без змін
    if (str.length >= length) {
        return str;
    }

    // Обчислюємо, скільки символів потрібно додати
    const paddingLength = length - str.length;
    const padding = symbol.repeat(paddingLength); // Створюємо рядок з символів

    // Додаємо символи зліва або справа в залежності від параметра toLeft
    return toLeft ? padding + str : str + padding;
}

// Приклади виклику
console.log(padString('Ivan', 6, '*'));       // 'Ivan**'
console.log(padString('Ivan', 6, '*', true)); // '**Ivan'
console.log(padString('Ivan', 4, '*'));       // 'Ivan'