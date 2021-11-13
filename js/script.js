let mobMenu = document.querySelector('.mobilenav');
let ham = document.querySelector('#ham');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('#close');
let loginBtn = document.querySelectorAll('#login-btn');
let nav = document.querySelectorAll('li');
let section = document.querySelectorAll('section');
let shopbtn = document.querySelector('#shopnow');
let logo = document.querySelector('.logo');
let rem = document.querySelector('.rem');
let add = document.querySelector('.add');
let qty = document.querySelector('#qty');
let books = document.querySelectorAll('.book');
let productPage = document.querySelector('product');
let productImage = document.querySelector('#prd');
let productDetail = document.querySelector('.right').children;

for(let i=0; i<books.length; i++)
{
    books[i].addEventListener('click',function(){
        location.href = '#header';
        for(let i=0; i<section.length; i++)
        {
            section[i].style.display = "none";
        }
        let bookChildren = books[i].children;
        let bookDetails = bookChildren[1].children;
        console.log(bookChildren);
        productImage.src = bookChildren[0].src;
        productDetail[0].textContent = bookDetails[0].textContent;
        productDetail[1].textContent = bookDetails[1].textContent;
        productPage.style.display = "flex";
    })
}

logo.onclick = function(){
    location.href = "index.html";
}

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
        location.href = "/BigBook/pages/login.html";
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

add.addEventListener('click',function(){
    if(parseInt(qty.textContent)<10)
    {
        qty.textContent = parseInt(qty.textContent) + 1;
    }
})
rem.addEventListener('click',function(){
    if(parseInt(qty.textContent)>1)
    {
        qty.textContent = parseInt(qty.textContent) - 1;
    }
})