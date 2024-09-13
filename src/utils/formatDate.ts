export const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedYear = String(year).slice(-2);
  const formattedMonth = month.toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");

  return `${formattedDay} . ${formattedMonth} . ${formattedYear}`;
};

export function formatDateAndDay(dateString: string) {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(date);

  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );

  return { formattedDate, day };
}
