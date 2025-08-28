const cartContainer = document.getElementById("cartItems");
const totalContainer = document.getElementById("cartTotal");

if (cartContainer && totalContainer) {
  const cart = getCart();
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalContainer.innerHTML = "";
  } else {
    let total = 0;
    cartContainer.innerHTML = cart.map(id => {
      const product = getProductById(id);
      total += product.price;
      return `<div class="product-card">
        <img src="${product.img}" alt="${product.name}" style="width:100px">
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
      </div>`;
    }).join("");
    totalContainer.innerHTML = `<strong>Total: $${total}</strong>`;
  }
}
