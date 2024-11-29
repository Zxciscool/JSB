async function sequenceAsync(asyncFunctions) {
    let result = undefined;
  
    for (let i = 0; i < asyncFunctions.length; i++) {
      result = await asyncFunctions[i](result);
    }
  
    return result;
  }
   
  // Масив функцій-промісів
  const asyncFunctions = [
    (prevResult) => new Promise(resolve => setTimeout(() => resolve(prevResult + 1), 1000)),  // додає 1
    (prevResult) => new Promise(resolve => setTimeout(() => resolve(prevResult * 2), 1000)),  // множить на 2
    (prevResult) => new Promise(resolve => setTimeout(() => resolve(prevResult - 3), 1000)),  // віднімає 3
  ];
  
  // Викликаємо sequenceAsync
  sequenceAsync(asyncFunctions)
    .then(result => {
      console.log(result);  // Результат буде (0 + 1) * 2 - 3 = -1
    })
    .catch(error => {
      console.error('Помилка:', error);
    });