let mobMenu = document.querySelector('.mobilenav');
let ham = document.querySelector('#ham');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('#close');
let loginBtn = document.querySelectorAll('#login-btn');
ham.addEventListener('click',function()
{
    mobMenu.style.display = "flex";
    overlay.style.display = "block";
})
close.addEventListener('click',function()
{
    mobMenu.style.display = "none";
    overlay.style.display = "none";
})
overlay.addEventListener('click',function(){
    mobMenu.style.display = "none";
    overlay.style.display = "none";
})
for(let i=0; i<loginBtn.length; i++)
{
    loginBtn[i].addEventListener('click',function(){
        location.href = "BigBook/pages/login.html";
    })
}
