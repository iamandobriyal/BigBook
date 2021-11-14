
    var productImage = document.querySelector('#prd');
    var productDetail = document.querySelector('.right').children;
    let cartbtn = document.querySelector('.cartbtn');
    productImage.src = localStorage.getItem('imagesrc');
    productDetail[0].textContent = localStorage.getItem('bookname');
    productDetail[1].textContent = localStorage.getItem('authorname');
    productDetail[2].textContent = localStorage.getItem('price');
    var popUp = document.querySelector('.pop-up');
    document.querySelector('.logo').addEventListener('click',function(){
        location.href = '../pages/index.html';
    })
    cartbtn.onclick = function()
    {
            localStorage.setItem('imagesrc',productImage.src);
            localStorage.setItem('bookname',productDetail[0].textContent);
            localStorage.setItem('authorname',productDetail[1].textContent);
            localStorage.setItem('price',productDetail[2].textContent);
            popUp.style.display = "flex";
            setInterval(function(){
                popUp.style.display = "none";
            },3000)
    }
    
    