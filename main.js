// Cart handling
let cart = [];

// Add product to cart
function addToCart(id){
    const product = products.find(p=>p.id===id);
    if(product) cart.push(product);
    alert(`${product.name} added to cart!`);
}

// Simple animation example
function animateCartButton(button){
    button.style.transform = "scale(1.2)";
    setTimeout(()=> button.style.transform="scale(1)", 200);
}
