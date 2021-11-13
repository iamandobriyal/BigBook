let signupbtn = document.querySelector('#signup');
let signinbtn = document.querySelector('#signin');
let login = document.querySelector('#login');
let register = document.querySelector('#register');
let buttons = document.querySelectorAll('buttons');
let fields = document.querySelectorAll('input');
signupbtn.addEventListener('click',function()
{
    signupbtn.classList.add('active');
    login.style.display = "none";
    register.style.display = "flex";
    signinbtn.classList.remove('active');
})
signinbtn.addEventListener('click',function()
{
    signinbtn.classList.add('active');
    login.style.display = "flex";
    register.style.display = "none";
    signupbtn.classList.remove('active');
})

buttons[1].addEventListener('click',function()
{
    if(fields[5].value!=fields[4].value)
    {
        document.querySelector('output').textContent = "Password Does Not Match";
    }
})