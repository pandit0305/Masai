// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

// declare the variable 
let year_birth = 1895;

// store the current date in variable today
let today = new Date();
// get only year from that date
let year = today.getFullYear();
//getting the age 
let age = year - year_birth;

// check age is between 13 and 19 (included both),and print teenage

if (age >=13 && age <=19){
  console.log('Teenage');

  //chech the age is between 20 and 29, and print twenties.
}else if (age >= 20 && age <=29){
  console.log('Twenties');
  
}else{
  console.log('You are not eligible to fill the form');
}

