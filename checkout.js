// Sanitize function to prevent XSS
function sanitize(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Form validation and submission
document.getElementById('checkoutForm').addEventListener('submit', function(e){
    e.preventDefault(); // prevent default form submission

    const name = sanitize(document.getElementById('name').value.trim());
    const email = sanitize(document.getElementById('email').value.trim());
    const address = sanitize(document.getElementById('address').value.trim());
    const phone = sanitize(document.getElementById('phone').value.trim());

    // Basic front-end validation
    if(!name || !email || !address) {
        alert("Please fill in all required fields.");
        return;
    }

    // Regex email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Optional: phone validation (basic)
    const phonePattern = /^[0-9\-\(\)\s]+$/;
    if(phone && !phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Simulate order submission (no backend)
    document.getElementById('confirmationMessage').innerHTML = `
        <h2>Thank you, ${name}!</h2>
        <p>Your order has been received. A confirmation email will be sent to ${email}.</p>
    `;

    // Clear cart after checkout
    localStorage.removeItem('cart');

    // Reset form
    document.getElementById('checkoutForm').reset();
});
