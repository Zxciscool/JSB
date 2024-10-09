/* Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення, 
що вказує, чи є введений рік високосним. */

const userYear = +prompt('please enter year');
if(((userYear % 4 === 0) && (userYear % 100 !== 0)) || (userYear % 400 == 0)){
   console.log(`${userYear} is  leap year`);
}

else {
    console.log(`${userYear} is not leap year`);
}