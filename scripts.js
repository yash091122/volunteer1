
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const opportunitySelect = document.getElementById('opportunity');
    const amountContainer = document.getElementById('amount-container');
    const nextButton = document.getElementById('next-button');

    opportunitySelect.addEventListener('change', function() {
        if (opportunitySelect.value === 'web-developer') {
            amountContainer.classList.remove('d-none');
        } else {
            amountContainer.classList.add('d-none');
        }
    });

    nextButton.addEventListener('click', function() {
        const form = document.getElementById('application-form');
        const formData = new FormData(form);

        // Here you can store the form data locally or send it to the server
        // before redirecting the user to the payment page.

        window.location.href = 'payment.html'; // Redirect to the payment page
    });
});
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    const payNowButton = document.getElementById('payNowButton');
    let selectedPaymentMethod = null;

    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove 'selected' class from all options
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add 'selected' class to the clicked option
            option.classList.add('selected');

            // Enable the Pay Now button
            payNowButton.disabled = false;

            // Store the selected payment method
            selectedPaymentMethod = option.getAttribute('data-payment');
        });
    });

    payNowButton.addEventListener('click', function() {
        if (selectedPaymentMethod) {
            alert(`Proceeding with ${selectedPaymentMethod} payment...`);
            
            // Here you would add the logic to integrate with the respective payment gateway
            // For demonstration, we'll just redirect to a success page

            setTimeout(() => {
                window.location.href = 'payment-success.html'; // Replace with the actual success page
            }, 1000); // Simulate a delay for processing
        }
    });
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    const payNowButton = document.getElementById('payNowButton');
    let selectedPaymentMethod = null;

    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove 'selected' class from all options
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add 'selected' class to the clicked option
            option.classList.add('selected');

            // Enable the Pay Now button
            payNowButton.disabled = false;

            // Store the selected payment method
            selectedPaymentMethod = option.getAttribute('data-payment');
        });
    });

    payNowButton.addEventListener('click', function() {
        if (selectedPaymentMethod) {
            // Simulate processing (could add an actual payment integration here)
            setTimeout(() => {
                // Redirect to the payment success page
                window.location.href = 'payment-success.html';
            }, 500); // Simulate a short delay
        }
    });
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('.payment-option');
    const payNowButton = document.getElementById('payNowButton');
    let selectedPaymentMethod = null;

    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove 'selected' class from all options
            paymentOptions.forEach(opt => opt.classList.remove('selected'));

            // Add 'selected' class to the clicked option
            option.classList.add('selected');

            // Enable the Pay Now button
            payNowButton.disabled = false;

            // Store the selected payment method
            selectedPaymentMethod = option.getAttribute('data-payment');
        });
    });

    payNowButton.addEventListener('click', function() {
        if (selectedPaymentMethod) {
            // Redirect to the payment success page
            window.location.href = 'payment-success.html';
        }
    });
});

