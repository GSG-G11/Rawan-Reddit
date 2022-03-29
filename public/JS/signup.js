const form = document.getElementsByTagName('form')[0];
const userUrlImg = document.getElementById('user_url_img');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const userUrlImgErr = document.getElementById('userUrlImgErr');
const usernameErr = document.getElementById('usernameErr');
const emailErr = document.getElementById('emailErr');
const passwordErr = document.getElementById('passwordErr');
const confirmPasswordErr = document.getElementById('confirmPasswordErr');

const displayErr = (errElem, errMsg) => {
  errElem.innerText = errMsg;
};

const checkUserUrlImg = () => {
  if (userUrlImg.validity.typeMismatch) {
    displayErr(userUrlImgErr, 'Please enter a valid URl IMAGE');
  } else if (userUrlImg.validity.valueMissing) {
    displayErr(userUrlImgErr, 'Please enter an URl IMAGE ');
  } else {
    displayErr(userUrlImgErr, '');
    return true;
  }
};

const checkUsername = () => {
  if (username.validity.typeMismatch) {
    displayErr(usernameErr, 'Please enter a valid username');
  } else if (username.validity.valueMissing) {
    displayErr(usernameErr, 'Please enter an username');
  } else {
    displayErr(usernameErr, '');
    return true;
  }
};

const checkEmail = () => {
  if (email.validity.typeMismatch) {
    displayErr(emailErr, 'Please enter a valid email');
  } else if (email.validity.valueMissing) {
    displayErr(emailErr, 'Please enter an email');
  } else {
    displayErr(emailErr, '');
    return true;
  }
};

const checkPassword = () => {
  if (password.validity.patternMismatch) {
    displayErr(
      passwordErr,
      'Password must contain at least eight characters, including one letter and one number'
    );
  } else if (password.validity.valueMissing) {
    displayErr(passwordErr, 'Please enter a password');
  } else {
    displayErr(passwordErr, '');
    return true;
  }
};

const checkConfirmPassword = () => {
  if (password.value != confirmPassword.value) {
    displayErr(confirmPasswordErr, 'Passwords do not match');
  } else if (confirmPassword.validity.valueMissing) {
    displayErr(confirmPasswordErr, 'Please confirm your password');
  } else {
    displayErr(confirmPasswordErr, '');
    return true;
  }
};

userUrlImg.addEventListener('focusout', checkUserUrlImg);
username.addEventListener('focusout', checkUsername);
email.addEventListener('focusout', checkEmail);
password.addEventListener('focusout', checkPassword);
confirmPassword.addEventListener('focusout', checkConfirmPassword);

form.addEventListener('submit', (event) => {
  if (!checkUserUrlImg()) {
    event.preventDefault();
  }
  if (!checkUsername()) {
    event.preventDefault();
  }
  if (!checkEmail()) {
    event.preventDefault();
  }
  if (!checkPassword()) {
    event.preventDefault();
  }
  if (!checkConfirmPassword()) {
    event.preventDefault();
  }
  event.preventDefault();
  fetch('/api/v1/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({
      userUrlImg: userUrlImg.value,
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    }),
  }).then((response) => {
    if (response.redirected) {
      window.location.href = response.url;
    }
    return response;
  });
});
