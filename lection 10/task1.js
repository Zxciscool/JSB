/* Вам необхідно використовувати масив нотифікацій з минулих занять. 
До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
 щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків 
 об'єкта notifications таким чином, немов працюємо з "плоским" масивом. */

 // Функція для групування сповіщень за джерелом
function groupNotificationsBySource(notifications) {
    // Групуємо сповіщення за джерелом
    const groupedNotifications = notifications.reduce((acc, notification) => {
      const { source, text, date } = notification;
  
      // Якщо джерело ще не існує в об'єкті, створюємо порожній масив
      if (!acc[source]) {
        acc[source] = [];
      }
  
      // Додаємо сповіщення в масив цього джерела
      acc[source].push({ text, date });
  
      return acc;
    }, {});
  
    // Додаємо ітератор для "плоского" перебору
    groupedNotifications[Symbol.iterator] = function() {
      // Створюємо масив всіх сповіщень з усіх джерел
      const allNotifications = Object.values(this).flat();
      
      // Ітератор для масиву всіх сповіщень
      let index = 0;
      return {
        next: () => {
          if (index < allNotifications.length) {
            return { value: allNotifications[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    };
  
    return groupedNotifications;
  }