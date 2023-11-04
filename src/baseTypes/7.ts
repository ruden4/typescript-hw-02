/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
 Sunday = 'SUNDAY',
 Monday = 'MONDAY',
 Tuesday = 'TUEDAY',
 Wednesday = 'WEDNESDAY',
 Thursday = 'THURSDAY',
 Friday = 'FRIDAY',
 Saturday = 'SATURDAY',
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.Sunday || day === DaysOfWeek.Saturday;
}
