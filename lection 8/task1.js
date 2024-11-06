/* Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив,
у якому кожен рядок має першу літеру у верхньому регістрі,
 а решту літер - у нижньому регістрі. */

 function capitalizeStrings(arr) {
    return arr.map(str => {
      // Перетворюємо першу літеру на велику, а решту — на малу
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  }