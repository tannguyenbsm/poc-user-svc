const dateObject = new Date();
// current date
// adjust 0 before single digit date
const date = (`0${dateObject.getDate()}`).slice(-2);
 
// current month
const month = (`0${dateObject.getMonth() + 1}`).slice(-2);
 
// current year
const year = dateObject.getFullYear();
 
// current hours
const hours = dateObject.getHours();
 
// current minutes
const minutes = dateObject.getMinutes();
 
// current seconds
const seconds = dateObject.getSeconds();
 
// prints date & time in YYYY-MM-DD HH:MM:SS format
const time = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

console.log('SEND EMAIL TO LENDER DO NOT HAVE LOGO: ' + time)
