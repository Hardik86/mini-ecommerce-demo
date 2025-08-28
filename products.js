// Product data (mock database)
const products = [
    {
        id: 1,
        name: "Eco Tote Bag",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1582407947304-22c3b1ef9cf8?auto=format&fit=crop&w=400"
    },
    {
        id: 2,
        name: "Reusable Bottle",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1592878902032-fc1e3098de8c?auto=format&fit=crop&w=400"
    },
    {
        id: 3,
        name: "Organic Cotton Shirt",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1600185367294-ffdf6fdb43d7?auto=format&fit=crop&w=400"
    }
];

// Sanitize text to prevent XSS
function sanitize(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Render products dynamically
function renderProducts() {
    const grid = document.getElementById('productGrid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${sanitize(product.image)}" alt="${sanitize(product.name)}">
            <h3>${sanitize(product.name)}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;

        grid.appendChild(card);
    });
}

// Add to Cart logic using localStorage
function setupAddToCart() {
    document.getElementById('productGrid').addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const id = parseInt(e.target.getAttribute('data-id'));
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const product = products.find(p => p.id === id);
            if(product) {
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${product.name} added to cart!`);
            }
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupAddToCart();
});
