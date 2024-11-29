function concurrentPromises(promises, maxConcurrent) {
    let results = [];  // Масив для збереження результатів
    let running = 0;    // Лічильник для відстеження кількості паралельних промісів
    let index = 0;      // Лічильник для перебору промісів
    let resolveResults;
  
    return new Promise((resolve, reject) => {
      resolveResults = resolve;  // Функція resolve для Promise, яку повертає concurrentPromises
  
      // Функція для запуску наступного промісу
      function runNext() {
        if (index === promises.length && running === 0) {
          resolve(results);  // Якщо всі проміси виконано, повертаємо результат
          return;
        }
  
        // Якщо є проміси, що ще не виконано і можемо запустити новий, запускаємо його
        if (index < promises.length && running < maxConcurrent) {
          running++;  // Збільшуємо лічильник запущених промісів
          const currentIndex = index;  // Поточний індекс
          index++;  // Переміщаємося до наступного промісу
  
          // Виконуємо проміс
          promises[currentIndex]
            .then(result => {
              results[currentIndex] = result;  // Зберігаємо результат
              running--;  // Зменшуємо лічильник запущених промісів
  
              // Запускаємо наступний проміс
              runNext();
            })
            .catch(error => {
              results[currentIndex] = error;  // У разі помилки зберігаємо її в масиві
              running--;  // Зменшуємо лічильник
  
              // Запускаємо наступний проміс
              runNext();
            });
        }
      }
  
      // Початковий запуск
      runNext();
    });
  }