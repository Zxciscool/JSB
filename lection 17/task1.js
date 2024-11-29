function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
      // Генеруємо випадкову затримку між 0 і 1000 мілісекунд (від 0 до 1 секунди)
      const delay = Math.random() * 1000;
      
      // Використовуємо setTimeout для відкладеного виведення кожної літери
      setTimeout(() => {
        console.log(message[i]);
      }, delay * i); // Затримка буде збільшуватись з кожною літерою
    }
  }
  
  // Викликаємо функцію з тестовим рядком
  randomDelayPrint("Hello, World!");