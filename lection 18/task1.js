function sumArrayPromise(numbers) {
    return new Promise((resolve, reject) => {
      // Перевіряємо, чи масив містить лише числа
      if (!Array.isArray(numbers) || numbers.some(isNaN)) {
        reject('Масив повинен містити лише числа');
        return;
      }
  
      // Виконуємо асинхронне діяння через 3 секунди
      setTimeout(() => {
        // Обчислюємо суму всіх чисел
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        resolve(sum);  // Повертаємо суму через resolve
      }, 3000);  // Затримка 3 секунди
    });
  }