const products = [
    { id:1, name:"Eco Water Bottle", price:15.99, image:"https://picsum.photos/id/1011/400/300" },
    { id:2, name:"Reusable Bag", price:9.99, image:"https://picsum.photos/id/1012/400/300" },
    { id:3, name:"Organic Notebook", price:12.49, image:"https://picsum.photos/id/1013/400/300" },
    { id:4, name:"Bamboo Toothbrush", price:4.99, image:"https://picsum.photos/id/1014/400/300" }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}" />
            <h2>${prod.name}</h2>
            <p>$${prod.price.toFixed(2)}</p>
            <button onclick="addToCart(${prod.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
});

function addToCart(id) {
    alert(`Product ${id} added to cart!`);
}
