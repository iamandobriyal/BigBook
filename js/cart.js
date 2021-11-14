let container = document.querySelector('.container');
let newItem = [];
let img = [];
let details = [];
let bookname = [];
let author = [];
let qtyt = [];
let price = [];
let total = [];
let closebtn = [];
var n = 0;

window.onload = function()
{
    if(k!=0)
    {
        newItem[n] = document.createElement('div');
        newItem[n].classList.add('product');
        img[n] = document.createElement('img');
        img[n].src = localStorage.getItem('imagesrc');
        img[n].classList.add('prdimg');
        details[n] = document.createElement('div');
        details[n].classList.add('details');
        bookname[n] = document.createElement('div');
        bookname[n].classList.add('name');
        bookname[n].textContent = localStorage.getItem('bookname');
        author[n] = document.createElement('div');
        author[n].classList.add('author');
        author[n].textContent = localStorage.getItem('authorname');
        qtyt[n] = document.createElement('div');
        qtyt[n].classList.add('qty');
        qtyt[n].textContent = "Qty:" + localStorage.getItem('qty');
        total[n] = document.createElement('div');
        total[n].classList.add('total');
        price[n] = localStorage.getItem('price');
        total[n].textContent = "Rs" + price[n].substring(2);
        closebtn[n] = document.createElement('img');
        closebtn[n].src = "../images/close.png";
        closebtn[n].classList.add('close');
        container.appendChild(newItem[n]);
        newItem[n].appendChild(closebtn[n]);
        newItem[n].appendChild(img[n]);
        newItem[n].appendChild(details[n]);
        details[n].appendChild(bookname[n]);
        details[n].appendChild(author[n]);
        details[n].appendChild(qtyt[n]);
        details[n].appendChild(total[n]);
    }
}