/* Вам необхідно написати функцію-декоратор retry(fn, maxAttempts),
 яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю 
 спроб у разі помилки та повертає результат останнього виклику. */

 function retry(fn, maxAttempts) {
  return async function(...args) {
      let lastError;
      
      // Виконуємо спроби від 1 до maxAttempts
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
          try {
              console.log(`Спроба ${attempt} з ${maxAttempts}`);
              return await fn.apply(this, args);
          } catch (error) {
              console.log(`Помилка при спробі ${attempt}:`, error.message);
              lastError = error;
              
              // Якщо це остання спроба - викидаємо помилку
              if (attempt === maxAttempts) {
                  throw new Error(`Всі ${maxAttempts} спроб завершились невдачею. Остання помилка: ${lastError.message}`);
              }
          }
      }
  }
}