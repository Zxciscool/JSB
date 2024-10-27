/*Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок 
і перевіряє, чи є введений рядок паліндромом. */


function isPalindrome(str) {
    let  lengthCheck = str.length - 1; // довжина строки
    for (let i = 0; i < lengthCheck / 2; i++) {
        let x = str[i]; // слово зліва направо
        let y = str[lengthCheck - i]; // слово справа на ліво
        if (x != y) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('hellolleh'));
console.log(isPalindrome('hello'));
