let mobMenu = document.querySelector('.mobilenav');
let ham = document.querySelector('#ham');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('#close');
let loginBtn = document.querySelectorAll('#login-btn');
let nav = document.querySelectorAll('li');
let section = document.querySelectorAll('section');
let shopbtn = document.querySelector('#shopnow');


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
        location.href = "../pages/login.html";
    })
}
for(let i=0; i<nav.length; i++)
{
    nav[i].addEventListener('click',function(){
        if(i<4)
        {
            section[i].style.display = "flex";
            for(let j=0; j<section.length; j++)
            {
                if(j!=i)
                {
                    section[j].style.display = "none";
                }
            }
        }
        else if(i>3)
        {
            section[i-4].style.display = "flex";
            for(let j=0; j<section.length; j++)
            {
                if(j!=i-4)
                {
                    section[j].style.display = "none";
                }
            }
        } 
    })
}
shopbtn.addEventListener('click',function(){
    section[0].style.display = "none";
    section[1].style.display = "flex";
})
