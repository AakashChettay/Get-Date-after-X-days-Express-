const addDays = require('date-fns/addDays');

function dateByAddingDays(days) {
  // Start with the date: August 22, 2020
  const startDate = new Date(2020, 7, 22); // Note: Months are 0-indexed, so 7 represents August

  // Add the specified number of days
  const futureDate = addDays(startDate, days);

  // Format the date correctly
  const formattedDate = `${futureDate.getDate()}-${futureDate.getMonth() + 1}-${futureDate.getFullYear()}`;

  return formattedDate;
}

module.exports = dateByAddingDays;
