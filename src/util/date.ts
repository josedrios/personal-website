const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function convertDate(date: string) {
  const year = date.slice(0, 4);
  // the replace function removes leading 0's
  const month = parseInt(date.slice(5, 7).replace(/^0+/, ""), 10);
  const day = date.slice(8, 10).replace(/^0+/, "");

  return months[month - 1] + " " + day + ", " + year;
}
