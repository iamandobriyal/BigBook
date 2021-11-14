
    var qty = document.querySelector('#qty');
    var rem = document.querySelector('.rem');
    var add = document.querySelector('.add');
    var productImage = document.querySelector('#prd');
    var productDetail = document.querySelector('.right').children;
    
    productImage.src = localStorage.getItem('imagesrc');
    productDetail[0].textContent = localStorage.getItem('bookname');
    productDetail[1].textContent = localStorage.getItem('authorname');

    

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

    
