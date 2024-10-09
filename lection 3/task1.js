/*Вам необхідно написати програму, яка приймає на вхід число і виводить
 у консоль повідомлення залежно від значення числа. Якщо число ділиться на 3,
  то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz, 
  а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. Наприклад,
   для числа 15 повідомлення має бути FizzBuzz.*/

   const userNumber = +prompt('Please enter number');


    if ( userNumber % 5 !== 0 && userNumber % 3 === 0 ) {

    console.log('Fizz');

   }

    else if (userNumber % 3 !== 0 && userNumber % 5 === 0) {

    console.log('Buzz');

   } 

   else  if (userNumber % 3 === 0 && userNumber % 5 === 0) {

    console.log('FizzBuzz');

   }

   else {
    console.log ('wrong number');
   }