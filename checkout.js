document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('checkoutForm');
    const feedback = document.getElementById('confirmationMessage');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const name = form.name.value.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;");
        const email = form.email.value.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;");
        const address = form.address.value.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;");
        const phone = form.phone.value.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;");

        if(!name||!email||!address){
            feedback.textContent = "Please fill all required fields!";
            feedback.style.color = "red";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            feedback.textContent = "Please enter a valid email!";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = "Order submitted successfully!";
        feedback.style.color = "green";
        form.reset();
    });
});
