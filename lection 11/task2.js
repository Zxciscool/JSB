/* Вам необхідно написати функцію-декоратор validate(fn, validator),
 яка приймає на вхід функцію і додає можливість перевіряти аргументи, передані у функцію fn,
  на відповідність заданому validator. Якщо аргументи не проходять перевірку, 
  то декоратор має викидати виняток. */

  function validate(fn, validator) {
    // Повертаємо нову функцію, яка обгортає оригінальну
    return function(...args) {
        // Перевіряємо аргументи через validator
        const isValid = validator(...args);
        
        // Якщо перевірка не пройдена - кидаємо помилку
        if (!isValid) {
            throw new Error('Невалідні аргументи функції');
        }
        
        // Якщо все добре - викликаємо оригінальну функцію
        return fn.apply(this, args);
    }
}