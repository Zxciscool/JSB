Вам необхідно створити конструктор Студента, у якого мають
 бути властивості: ім'я, прізвище, рік народження, оцінки, відвідуваність,
  курс. Кількість оцінок і відвіданих занять залежить від курсу, 
  на якому займається студент. Так само у Студента 
  є методи: додати оцінку, додати відвідування, отримати середню успішність, 
  отримати середнє відвідування, отримати кількість пройдених занять, 
  змінити курс (мають оновитися дані про курс), а також отримати всю
   інформацію про студента.
Додати Студенту можливість навчатися на кількох курсах з можливістю
 додавання і видалення курсу.
Створити конструктор Група, яка має список студентів і методи 
для додавання, видалення студентів, а також одержання рейтингу
 студентів за відвідуваністю і успішністю.


// Конструктор Студента
class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.courses = new Map(); // Зберігаємо інформацію про курси
    }

    // Додати курс
    addCourse(courseName) {
        if (!this.courses.has(courseName)) {
            this.courses.set(courseName, {
                grades: [],
                attendance: [],
                totalLessons: 20 // Припустимо, на кожному курсі 20 занять
            });
        }
        return this;
    }

    // Видалити курс
    removeCourse(courseName) {
        this.courses.delete(courseName);
        return this;
    }

    // Додати оцінку
    addGrade(courseName, grade) {
        if (this.courses.has(courseName)) {
            this.courses.get(courseName).grades.push(grade);
        }
        return this;
    }

    // Додати відвідування (true - присутній, false - відсутній)
    addAttendance(courseName, wasPresent) {
        if (this.courses.has(courseName)) {
            this.courses.get(courseName).attendance.push(wasPresent);
        }
        return this;
    }

    // Отримати середню успішність по курсу
    getAverageGrade(courseName) {
        if (this.courses.has(courseName)) {
            const grades = this.courses.get(courseName).grades;
            return grades.length ? 
                grades.reduce((sum, grade) => sum + grade, 0) / grades.length : 0;
        }
        return 0;
    }

    // Отримати середню відвідуваність по курсу
    getAverageAttendance(courseName) {
        if (this.courses.has(courseName)) {
            const attendance = this.courses.get(courseName).attendance;
            return attendance.length ? 
                attendance.filter(a => a).length / attendance.length : 0;
        }
        return 0;
    }

    // Отримати кількість пройдених занять по курсу
    getCompletedLessons(courseName) {
        if (this.courses.has(courseName)) {
            return this.courses.get(courseName).attendance.length;
        }
        return 0;
    }

    // Отримати всю інформацію про студента
    getFullInfo() {
        const info = {
            personalInfo: {
                firstName: this.firstName,
                lastName: this.lastName,
                birthYear: this.birthYear
            },
            courses: {}
        };

        this.courses.forEach((courseData, courseName) => {
            info.courses[courseName] = {
                averageGrade: this.getAverageGrade(courseName),
                averageAttendance: this.getAverageAttendance(courseName),
                completedLessons: this.getCompletedLessons(courseName)
            };
        });

        return info;
    }
}

// Конструктор Групи
class Group {
    constructor(name) {
        this.name = name;
        this.students = new Set();
    }

    // Додати студента
    addStudent(student) {
        this.students.add(student);
        return this;
    }

    // Видалити студента
    removeStudent(student) {
        this.students.delete(student);
        return this;
    }

    // Отримати рейтинг за відвідуваністю
    getAttendanceRating(courseName) {
        return Array.from(this.students)
            .map(student => ({
                student: student,
                attendance: student.getAverageAttendance(courseName)
            }))
            .sort((a, b) => b.attendance - a.attendance);
    }

    // Отримати рейтинг за успішністю
    getGradeRating(courseName) {
        return Array.from(this.students)
            .map(student => ({
                student: student,
                grade: student.getAverageGrade(courseName)
            }))
            .sort((a, b) => b.grade - a.grade);
    }
}