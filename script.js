
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', function(event) {
        let valid = true;
        let message = '';

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        // Check first name
        if (firstName === '') {
            message += 'First Name is required.\n';
            valid = false;
        }

        // Check last name
        if (lastName === '') {
            message += 'Last Name is required.\n';
            valid = false;
        }

        // Check email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            message += 'Please enter a valid email address.\n';
            valid = false;
        }

        // Check phone number
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            message += 'Phone Number must be 10 digits.\n';
            valid = false;
        }

        if (!valid) {
            alert(message);
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});


