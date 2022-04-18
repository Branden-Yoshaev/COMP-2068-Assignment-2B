const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000);
})

function setForMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList,remove("form__message--success", "form__message-error");
  messageElement.classList.remove(`form__message--${type}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const loginFrom = document.querySelector('#login');
  const createAccountForm = document.querySelector('#createAccount');


  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginFrom.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", () => {
    loginFrom.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });

  loginFrom.addEventListener("submit", e => {
    e.preventDefault();

    // AJAX login
    setForMessage(loginForm, "Error", "Invaild username and/or password");
  })
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;