// Product Data
const products = [
    { id:1, name:"Eco Bottle", price:15, img:"https://via.placeholder.com/200?text=Eco+Bottle" },
    { id:2, name:"Reusable Bag", price:10, img:"https://via.placeholder.com/200?text=Reusable+Bag" },
    { id:3, name:"Solar Charger", price:35, img:"https://via.placeholder.com/200?text=Solar+Charger" }
];

// Render products
const productList = document.getElementById('productList');
if(productList){
    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <h3>${prod.name}</h3>
            <p>$${prod.price}</p>
            <button onclick="addToCart(${prod.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}
