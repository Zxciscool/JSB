function intervalRace(functions, t) {
    let results = [];  // Масив для збереження результатів функцій
    let index = 0;     // Лічильник для відстеження поточної функції
    let intervalId = setInterval(() => {
      if (index < functions.length) {
        // Викликаємо поточну функцію та зберігаємо її результат у масив
        results.push(functions[index]());
        index++; // Переходимо до наступної функції
      } else {
        // Якщо всі функції виконано, очищаємо інтервал і повертаємо результати
        clearInterval(intervalId);
        console.log(results); // Виводимо результат у консоль
      }
    }, t); // Викликаємо функції через кожен інтервал t
  }