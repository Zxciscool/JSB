/* Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок 
і повертає його у зворотному порядку.*/


function reverseString(str) {

let newString = '';
for (let i = str.length - 1; i >= 0; i--) { 
    newString += str[i];
}
return newString;

}

console.log(reverseString('hello'));