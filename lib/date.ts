const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
