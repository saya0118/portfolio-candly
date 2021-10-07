
function clickEvent(){
    alert("New item was added your cart!");
};

(function(){
    const carInfo = document.getElementById('nav-cart');
    const cart = document.getElementById('cart');

    carInfo.addEventListener('click', function(){
        cart.classList.toggle("show-cart");
    });
})();


// add items to the cart

(function(){

    const addBtn = document.querySelectorAll('.add');

    addBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){

            // console.log(event.target)

        if(event.target.parentElement.classList.contains('add')){
            
            
            let fullPath = event.target.parentElement.parentElement.firstElementChild.src;
            let pos = fullPath.indexOf('image')+5;
            let partPath = fullPath.slice(pos);

            // console.log(fullPath);

            const item = {};
            item.img = `image${partPath}`;
            
            let name = event.target.parentElement.parentElement.children[1].textContent;
            item.name = name;
            
            let price = event.target.parentElement.parentElement.children[2].children[0].textContent;

            // let finalPrice = price.slice(1).trim();
            item.price = price;

            console.log(price)

            console.log(name);

            console.log(item);

            const cartList = document.createElement('li');
            cartList.classList.add('item');

            cartList.innerHTML = `
                    <div class="image">
                        <img id="item-img" src="${item.img}" alt="">
                    </div>
                    <div class="description">
                        <span>${item.name}</span><br>
                        <span>$<span id="item-price">${item.price}</span></span>
                    </div>
                    <div class="delete"> 
                        <button class="delete-button" type="button" name="button">
                            <img src="image/DeleteFilled.png" alt="">
                        </button>
                    </div>
            `;

            //select cart
            const cart = document.getElementById('cart');
            const total = document.querySelector('.total-price');
            cart.insertBefore(cartList, total);
            showTotals();
            
            }
        });
    });  

//show totals

    function showTotals(){
    const total = [];
    const items = document.getElementById('collection-price');

    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    });
    // console.log(total);

    const totalPrice = total.reduce(function(total,item){
        total += item;
        return total;
    },0);
    const finalPrice = totalPrice.toFixed(2);
    // console.log(finalPrice);

    document.getElementById('total-price').textContent = finalPrice;
    document.getElementById('nav-cart-total').textContent = finalPrice;
    document.getElementById('item-count').textContent = total.length;
}
})();