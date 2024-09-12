export const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);

  // Extract the year, month, and day
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based
  const day = date.getDate();

  // Format year, month, and day
  const formattedYear = String(year).slice(-2); // Get last two digits of the year
  const formattedMonth = month.toString().padStart(2, "0"); // Ensure two digits
  const formattedDay = day.toString().padStart(2, "0"); // Ensure two digits

  return `${formattedDay} . ${formattedMonth} . ${formattedYear}`;
};
