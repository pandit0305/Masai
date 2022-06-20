// Given stored username and password and input username and password, Print if the user can login or not.

//declare the variable as username anr password
let username = 'Pandit@gmail.com';
let password = '123@abc';

//Also declare a input username and password as variable
let input_username = 'pandit@gmail.com';
let input_password = '123@abc';

//check the given credential, user can login or not

if (username === input_username && password === input_password){
  console.log('User can Login');
}else if(input_username !== username){
  console.log('Username is incorrect');
}else{
  console.log('Password is incorrect');
}
