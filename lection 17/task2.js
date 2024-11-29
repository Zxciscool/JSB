function debounce(func, delay) {
    let timeoutId;  // Змінна для збереження ID таймера
  
    // Повертаємо нову функцію, яка буде виконувати дебаунс
    return function(...args) {
      // Кожен раз, коли викликається новий виклик, очищаємо попередній таймер
      clearTimeout(timeoutId);
  
      // Встановлюємо новий таймер
      timeoutId = setTimeout(() => {
        func(...args);  // Викликаємо вихідну функцію з аргументами
      }, delay);  // Вказуємо затримку
    };
  }