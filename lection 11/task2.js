/* Вам необхідно написати функцію-декоратор validate(fn, validator),
 яка приймає на вхід функцію і додає можливість перевіряти аргументи, передані у функцію fn,
  на відповідність заданому validator. Якщо аргументи не проходять перевірку, 
  то декоратор має викидати виняток. */

  // Декоратор validate
function validate(fn, validator) {
    return function(...args) {
      // Перевірка кожного аргументу через валідатор
      for (const arg of args) {
        if (!validator(arg)) {
          throw new Error('Argument is not valid');
        }
      }
      // Якщо всі аргументи проходять перевірку, викликаємо оригінальну функцію
      return fn(...args);
    };
  }