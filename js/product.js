
    var qty = document.querySelector('#qty');
    var rem = document.querySelector('.rem');
    var add = document.querySelector('.add');
    var productImage = document.querySelector('#prd');
    var productDetail = document.querySelector('.right').children;
    let cartbtn = document.querySelector('.cartbtn');
    productImage.src = localStorage.getItem('imagesrc');
    productDetail[0].textContent = localStorage.getItem('bookname');
    productDetail[1].textContent = localStorage.getItem('authorname');
    productDetail[2].textContent = localStorage.getItem('price');

    document.querySelector('.logo').addEventListener('click',function(){
        location.href = '../pages/index.html';
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
    var k =1;
    cartbtn.onclick = function()
    {
        localStorage.setItem('imagesrc',productImage.src);
        localStorage.setItem('bookname',productDetail[0].textContent);
        localStorage.setItem('qty',qty.textContent);
        localStorage.setItem('authorname',productDetail[1].textContent);
        localStorage.setItem('price',productDetail[2].textContent);
        localStorage.setItem('id',k);
        k++;
        location.href = '../pages/cart.html';
    }
    
    