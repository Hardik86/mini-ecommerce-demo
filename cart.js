const cartItems = document.getElementById('cartItems');
if(cartItems){
    if(cart.length===0) cartItems.innerHTML = "<p>Your cart is empty.</p>";
    else{
        cartItems.innerHTML = cart.map(item => `
            <div class="product-card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            </div>
        `).join('');
    }
}
