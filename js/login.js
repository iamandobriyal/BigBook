let signupbtn = document.querySelector('#signup');
let signinbtn = document.querySelector('#signin');
let login = document.querySelector('#login');
let register = document.querySelector('#register');
let buttons = document.querySelectorAll('button');
let fields = document.querySelectorAll('input');
let forget = document.querySelector('#fr');
let stch = document.querySelector('.switch');
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

forget.addEventListener('click',function(){
    document.querySelector('#forget').style.display = "flex";
    login.style.display = "none";
    register.style.display = "none";
    stch.style.display = "none";
})