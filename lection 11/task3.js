/* Вам необхідно написати функцію-декоратор retry(fn, maxAttempts),
 яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю 
 спроб у разі помилки та повертає результат останнього виклику. */

 function retry(fn, maxAttempts) {
    return async function(...args) {
      let attempt = 0;
      let lastError;
      let result;
  
      // Поки не досягнуто максимального числа спроб
      while (attempt < maxAttempts) {
        try {
          result = await fn(...args); // намагаємось викликати оригінальну функцію
          return result; // Якщо виклик успішний, повертаємо результат
        } catch (error) {
          lastError = error; // Якщо помилка, запам'ятовуємо її
          attempt++; // збільшуємо лічильник спроб
          console.log(`Attempt ${attempt} failed, retrying...`);
        }
      }
      // Якщо всі спроби не вдалися, повертаємо результат останнього виклику або викидаємо помилку
      console.log(`All attempts failed. Last error: ${lastError.message}`);
      return result; // Повертаємо результат останньої спроби (можливо, помилка)
    };
  }