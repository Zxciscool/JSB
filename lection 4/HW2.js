/*  Вам необхідно написати програму, яка приймає на вхід число N і знаходить
 усі числа в діапазоні від 1 до N, які є досконалими числами. */


 const userNumber = +prompt("Введіть число N: ");
 const perfectNumbers = [];
 for (let i = 1; i <= userNumber; i++) {
   let  sum = 0;
   for (let j = 1; j < i; j++) {
     if (i % j === 0) {
       sum += j;
     }
   }
   if (sum === i) {
     perfectNumbers.push(i);
   }
 }
 
 // Виведення результату
 if (perfectNumbers.length > 0) {
   console.log("Досконалі числа в діапазоні від 1 до " + userNumber + ": " + perfectNumbers.join(", "));
 } else {
   console.log("У діапазоні від 1 до " + userNumber + " немає досконалих чисел.");
 }