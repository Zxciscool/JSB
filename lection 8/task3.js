/* Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і
повертає об'єкт з такими властивостями:
sum - сума всіх елементів масиву
average - середнє значення елементів масиву
min - мінімальне значення в масиві
max - максимальне значення в масиві */


function analyzeArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0); // Обчислюємо суму
    const average = sum / arr.length; // Середнє значення
    const min = Math.min(...arr); // Мінімальне значення
    const max = Math.max(...arr); // Максимальне значення
    
    // Повертаємо об'єкт з результатами
    return {
      sum: sum,
      average: average,
      min: min,
      max: max
    };
  }