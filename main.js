
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
            
            
            let fullPath =
            event.target.parentElement.firstElementChildren; //removed '.src'
            // let pos = fullPath.indexOf('image')+5;
            // let partPath = fullPath.slice(pos);

            console.log(fullPath);
        }
                });
            });  
        })();

//             const item = {};
//             item.img = `shopping-img${partPath}`;
            
//             let name = event.target.parentElement.children[1].textContent;
//             item.name = name;
            
//             let price = event.target.parentElement.nextElementChild.children[0].children[1].textContent;

//             let finalPrice = price.slice(1).trim();
//             item.price = finalPrice;

//             console.log(finalPrice)

//             console.log(name);

//             console.log(item);

//             const cartItem = document.createElement('div');
//             cartItem.classList('cart');

//             cartItem.innerHTML = "${item.img}"

//             //select cart
//             const cart = document.getElementById('cart');
//             const total = document.querySelector('.total-price');

//             cart.insertBefore(cartItem, total);

            
//             }
//         });
//     });  

// //show totals

//     function showTotals(){
//     const total = [];
//     const items = document.querySelectorAll('#collection-price');

//     items.forEach(function(item){
//         total.push(parseFloat(item.textContent));
//     });
//     // console.log(total);

//     const totalPrice = total.reduce(function(total,item){
//         total += item;
//         return total;
//     },0);
//     const finalPrice = totalPrice.toFixed(2);

//     document.getElementById('total-price').textContent = finalPrice;
//     document.getElementById('nav-cart-total').textContent = finalPrice;
//     document.getElementById('item-count').textContent = total.length;
// }
// })();