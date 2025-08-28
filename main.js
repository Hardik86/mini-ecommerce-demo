// Wait until DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Simple front-end sanitization to prevent XSS
        const name = form.name.value.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const email = form.email.value.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const message = form.message.value.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");

        if(name === '' || email === '' || message === '') {
            feedback.textContent = 'All fields are required.';
            feedback.style.color = 'red';
            return;
        }

        // Simple email regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            feedback.textContent = 'Please enter a valid email.';
            feedback.style.color = 'red';
            return;
        }

        // If everything is valid
        feedback.textContent = 'Thank you! Your message has been submitted.';
        feedback.style.color = 'green';

        // Reset form
        form.reset();
    });
});
