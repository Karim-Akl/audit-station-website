export function formatDateTime(dateString: any) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const am_pm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  return `${day}/${month}/${year}, ${hours}:${minutes} ${am_pm}`;
  // return `${day}/${month}/${year}`;
}
