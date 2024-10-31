/* Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок
 і перетворює його до формату camelCase. */

 function camelCase(str, separator) {
    // Розбиваємо рядок за вказаним роздільником
    const words = str.split(separator);
    
    // Перетворюємо перше слово в нижній регістр, а інші - в верхній регістр
    const camelCased = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase(); // Перше слово в нижньому регістрі
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Інші слова з великої літери
        }
    }).join(''); // Об'єднуємо слова в один рядок

    return camelCased; // Повертаємо результат
}

// Приклади виклику
console.log(camelCase('hello world', ' '));        // 'helloWorld'
console.log(camelCase('java_script_language', '_')); // 'javaScriptLanguage'
console.log(camelCase('convert to camel case', ' ')); // 'convertToCamelCase'