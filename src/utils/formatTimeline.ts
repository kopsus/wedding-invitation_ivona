export function formatTimeline(startDate: string, endDate: string) {
  const formatDate = (date: string) => {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");

    return `${year}${month}${day}T${hours}${minutes}${seconds}`;
  };

  const startFormatted = formatDate(startDate);
  const endFormatted = formatDate(endDate);

  return `${startFormatted}/${endFormatted}`;
}
