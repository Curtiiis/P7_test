const pseudo = document.querySelector('#pseudo')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const togglePassword = document.querySelector('#togglePassword')

togglePassword.onclick = () => {
    togglePassword.classList.toggle("blue")
    password.type === "password"
       ? password.type = "text"
       : password.type = "password";
 }

function regexText(x) {
    const regexText = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'\s-]{1,40}$/;
    return RegExp(regexText).test(x);
 }

 function regexTextNumbers(x) {
   const regexTextNumbers = /^[0-9a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'\s-_]{1,40}$/;
   return RegExp(regexTextNumbers).test(x);
}

 function regexEmail(x) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RegExp(regexEmail).test(x.toLowerCase().trim());
 }

 function regexPassword(x) {
    const regexStrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#$%^&*]).{8,20}$/;
    return RegExp(regexStrongPassword).test(x);
 }

 function displayValidity(element, regex, message) {
    (!regex(element.value))
       ? setError(element, `Merci d'entrer un ${message} valide`)
       : setSuccess(element);
 }

 function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('shake', 'error');
    inputControl.classList.remove('success')

    setTimeout(() => {
       inputControl.classList.remove('shake');
    }, 500)
 }

 function setSuccess(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

 };

 function validBox() {
    const validatedBox = document.querySelector('.validated-box');
    validatedBox.style.display = 'flex';

    setTimeout(() => {
       validatedBox.style.display = 'none'
    }, 1000)
 }

 function redirection() {
   setTimeout(() => {
      window.location.replace(`${window.location.origin}/accueil.html?id=Sullivan`)
   }, 500)
 }

 function getId() {
   let params = new URLSearchParams(window.location.search);
   let userId = params.get("id")
   const welcomeMsg = document.querySelector('#welcome-msg');
   
   setTimeout(() => {
      welcomeMsg.textContent = `Bienvenue ${userId}`;
   }, 1000)
}
