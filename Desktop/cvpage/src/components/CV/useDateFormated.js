
const useDateFormated = (date) => {
  if(!date) return null;

  if(date === 'prezent') return 'prezent';

  const actualDate = new Date(date);
  const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const day = actualDate.getDate();
  const month = monthName[actualDate.getMonth()];
  const year = actualDate.getFullYear();
  const dateFormated = `${day} ${month}. ${year}`;
  return dateFormated;
}

export default useDateFormated;