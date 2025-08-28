const form = document.getElementById("checkoutForm");
const message = document.getElementById("confirmationMessage");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    message.textContent = "Thank you! Your order has been submitted.";
    localStorage.removeItem("cart");
    form.reset();
  });
}

