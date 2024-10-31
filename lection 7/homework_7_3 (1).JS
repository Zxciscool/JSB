/* Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів 
з інформацією про студентів (ім'я, вік, середній бал) і повертає середній 
	бал усіх студентів.

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4 */



function calculateAverageGrade(students) {
    // Перевіряємо, чи масив не пустий
    if (students.length === 0) {
        return 0; // Якщо масив пустий, повертаємо 0
    }

    // Сумуємо всі бали студентів
    let totalGrade = 0;
    for (const student of students) {
        totalGrade += student.grade; // Додаємо бал студента до загальної суми
    }

    // Обчислюємо середній бал
    const averageGrade = totalGrade / students.length;
    return averageGrade; // Повертаємо середній бал
}

const students = [ 
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4