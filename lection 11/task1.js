/* logArguments
Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію 
і додає можливість логувати всі аргументи, передані у функцію-аргумент. */

// Декоратор logArguments
function logArguments(fn) {
    return function(...args) {
      // Логуємо аргументи
      console.log('Arguments:', args);
  
      // Викликаємо оригінальну функцію з аргументами
      return fn(...args);
    };
  }