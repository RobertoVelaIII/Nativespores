document.addEventListener('DOMContentLoaded', () => {
    // Remove or comment out the countdown timer logic
    
    // Form submission
    const form = document.getElementById('notify-form');
    const thankYou = document.getElementById('thank-you');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        // Here you would typically send the email to your server
        console.log('Email submitted:', email);

        // Show thank you message
        form.style.display = 'none';
        thankYou.classList.remove('hidden');
    });
});
