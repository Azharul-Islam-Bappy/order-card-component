// Creating a sign up page

let $userName = document.querySelector('#username');
let $userNumber = document.querySelector('#usernumber');
let $userEmail = document.querySelector('#email');
let $submitData = document.querySelector('#submit');
let inputs = document.querySelector('input');

let  numRegex = /^[0-9]{11}$/;
let emailRegex =  /^([a-z\d\.\-a-z]+)@([a-z]+)([\.a-z]{2,8})([\.a-z]{2,8})?$/;
let nameRegex = /^[a-zA-Z]{3,}$/;

$userName.addEventListener("blur", function() {
  if ($userName.value.length > 3 && nameRegex.test($userName.value)) {
    $userName.className = 'valid';
    alert('Valid');
  } else{
    $userName.className = 'invalid';
    alert('Invalid');
  }
});

$userNumber.addEventListener("blur", function() {
  if ($userNumber.value.length === 11 && numRegex.test($userNumber.value)) {
    $userNumber.className = 'valid';
    alert('Valid');
  } else {
    $userNumber.className = 'invalid';
    alert('Invalid');
  }
});

$userEmail.addEventListener("blur", () => {
  let testEmail = emailRegex.test($userEmail.value);
  if (testEmail) {
    $userEmail.className = 'valid';
    alert('Valid');
  } else {
    $userEmail.className = 'invalid';
    alert('Invalid');
  }
});

let $userData = {}