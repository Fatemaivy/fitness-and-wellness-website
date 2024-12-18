function showWorkoutTips() {
    alert("1. Focus on form, not speed.\n2. Keep your core engaged during exercises.\n3. Gradually increase intensity over time.");
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for reaching out! We will get back to you soon.");
    } else {
        alert("Please fill in all fields.");
    }
});



