/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль
 повідомлення у форматі Вам N рік / роки / років. Залежно від числа N слово
  рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки. 
*/

const userAge = +prompt ('please enter age')

if (userAge % 10 === 1 && userAge % 100 !== 11) {
    console.log(`Вам ${userAge} рік`);
} else if (userAge % 10 >= 2 && userAge % 10 <= 4 && (userAge % 100 < 10 || userAge % 100 >= 20)) {
    console.log(`Вам ${userAge} роки`);
} else {
    console.log(`Вам ${userAge} років`);
}