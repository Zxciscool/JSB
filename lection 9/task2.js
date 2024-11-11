/* Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує
 сповіщення та має поля source / text / date. Вам необхідно перетворити цей масив на об'єкт,
  де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела. */

  // Функція для перетворення масиву об'єктів на об'єкт згрупований по джерелу
function groupNotificationsBySource(notifications) {
    return notifications.reduce((result, notification) => {
      const { source, text, date } = notification;
      
      // Якщо джерело ще не існує в результаті, ініціалізуємо його з порожнім масивом
      if (!result[source]) {
        result[source] = [];
      }
      
      // Додаємо сповіщення в масив, що відповідає цьому джерелу
      result[source].push({ text, date });
      
      return result;
    }, {});
  }
  
