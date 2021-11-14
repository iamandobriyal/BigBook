let container = document.querySelector('.container');
let newItem = [];
let img = [];
let details = [];
let bookname = [];
let author = [];
let total = [];
let closebtn = [];

window.onload = function()
{
        let imgsrc = JSON.parse(localStorage.getItem('imagesrcarr'));
        let bookName = JSON.parse(localStorage.getItem('booknamearr'));
        let authorName = JSON.parse(localStorage.getItem('authornamearr'));
        let price = JSON.parse(localStorage.getItem('pricearr'));
        for(let n=0; n<imgsrc; n++)
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
            total[n] = document.createElement('div');
            total[n].classList.add('total');
            total[n].textContent = localStorage.getItem('price');
            closebtn[n] = document.createElement('img');
            closebtn[n].src = "../images/close.png";
            closebtn[n].classList.add('close');
            container.appendChild(newItem[n]);
            newItem[n].appendChild(closebtn[n]);
            newItem[n].appendChild(img[n]);
            newItem[n].appendChild(details[n]);
            details[n].appendChild(bookname[n]);
            details[n].appendChild(author[n]);
            details[n].appendChild(total[n]);
        }
}