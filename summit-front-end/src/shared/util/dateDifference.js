const dateDifference = function(date1, date2) {
  console.log('date1',date1);  
  console.log('date2',date2);  
  let dt1;
  let dt2;
  if (!date1) {
    let today = new Date();
    dt1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  } else {
    dt1 = new Date(date1);
    dt1 = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());
  }

  dt2 = new Date(date2);
  const dateDifference = Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - dt1) /
      (1000 * 60 * 60 * 24)
  );
  console.log(dateDifference);
  return dateDifference;
};

export default dateDifference;
