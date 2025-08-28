// For product.html to show single product details
const detailContainer = document.getElementById("productDetail");
if (detailContainer) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = getProductById(id);

  if (product) {
    detailContainer.innerHTML = `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}" style="width:100%">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  } else {
    detailContainer.innerHTML = "<p>Product not found.</p>";
  }
}

// Cart functions
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  cart.push(id);
  saveCart(cart);
  alert("Product added to cart!");
}
