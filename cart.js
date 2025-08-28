// Sanitize function for security
function sanitize(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Render cart items
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${sanitize(item.image)}" alt="${sanitize(item.name)}" width="80">
            <div class="cart-info">
                <h3>${sanitize(item.name)}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <label>
                    Quantity:
                    <input type="number" min="1" value="1" data-index="${index}">
                </label>
                <button data-index="${index}">Remove</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    calculateTotals();
}

// Calculate subtotal, tax, and total
function calculateTotals() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price;
    });

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Remove item from cart
function setupRemove() {
    document.getElementById('cartItems').addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const index = parseInt(e.target.getAttribute('data-index'));
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1); // remove the item
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    });
}

// Update quantity (basic demo, still secure)
function setupQuantityChange() {
    document.getElementById('cartItems').addEventListener('input', (e) => {
        if(e.target.tagName === 'INPUT') {
            const index = parseInt(e.target.getAttribute('data-index'));
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let qty = parseInt(e.target.value);
            if(qty < 1) qty = 1;
            // Replace item multiple times (simple demo)
            const product = cart[index];
            cart[index] = {...product, price: product.price * qty};
            localStorage.setItem('cart', JSON.stringify(cart));
            calculateTotals();
        }
    });
}

// Checkout button (simple alert)
function setupCheckout() {
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        alert("Checkout feature coming soon! Thank you for shopping ethically 🌱");
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    setupRemove();
    setupQuantityChange();
    setupCheckout();
});
