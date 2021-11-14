
    var productImage = document.querySelector('#prd');
    var productDetail = document.querySelector('.right').children;
    let cartbtn = document.querySelector('.cartbtn');
    productImage.src = localStorage.getItem('imagesrc');
    productDetail[0].textContent = localStorage.getItem('bookname');
    productDetail[1].textContent = localStorage.getItem('authorname');
    productDetail[2].textContent = localStorage.getItem('price');
    var imagesrcarr = [];
    var booknamearr = [];
    var authornamearr = [];
    var pricearr = [];
    var popUp = document.querySelector('.pop-up');
    document.querySelector('.logo').addEventListener('click',function(){
        location.href = '../pages/index.html';
    })
    cartbtn.onclick = function()
    {
            
            imagesrcarr[0] = productImage.src;
            booknamearr[0] = productDetail[0].textContent;
            authornamearr[0] = productDetail[1].textContent;
            pricearr[0] = productDetail[2].textContent;
            localStorage.setItem('imagesrcarr',JSON.stringify(imagesrcarr));
            localStorage.setItem('booknamearr',JSON.stringify(booknamearr));
            localStorage.setItem('authornamearr',JSON.stringify(authornamearr));
            localStorage.setItem('pricearr',JSON.stringify(pricearr));
            popUp.style.display = "flex";
            setInterval(function(){
                popUp.style.display = "none";
            },3000)
    }
    
    