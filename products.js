const products = [
  { id: 1, name: "Eco Bottle", price: 15, img: "eco_bottle.jpg", description: "Reusable bottle." },
  { id: 2, name: "Organic Bag", price: 25, img: "organic_bag.jpg", description: "Eco-friendly bag." },
  { id: 3, name: "Solar Lamp", price: 35, img: "solar_lamp.jpg", description: "Portable solar lamp." }
];

function displayProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}" style="width:100%">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <a href="product.html?id=${p.id}"><button>View</button></a>
    </div>
  `).join("");
}

function getProductById(id) {
  return products.find(p => p.id == id);
}

displayProducts();
