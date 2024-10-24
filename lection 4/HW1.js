/* Вам необхідно написати програму, яка приймає на вхід число і виводить у
 консоль повідомлення у форматі: Число N є простим числом, якщо число N просте,
  та Число N не є простим числом, якщо число N складене.  */

  const userNumber = +prompt('please enter a number');

    if (userNumber < 1 && userNumber===1 ) {
        console.log("Число не є простим.");
    }
    else if (userNumber ===2 ) {
        console.log ('Число є простим');
    } 

    else {
        for (let i = 2; i < userNumber; i++) {
             if (userNumber % i === 0) {
                console.log('Число не є простим.');
    }
}   
        console.log("Число є простим.");
}