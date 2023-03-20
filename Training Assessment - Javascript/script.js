// Get the current date and time and display it on the page
function showDateTime() {
    const now = new Date();
    const dateTime = now.toLocaleString('pt-br');
    document.getElementById('datetime').textContent = dateTime;
}

// Update the date and time every second
setInterval(showDateTime, 1000);

// Open the Contact Us page when the link is clicked
const contactUsLink = document.querySelector('a[href="#contact-us"]');
if (contactUsLink) {
    contactUsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'contact-us.html';
    });
}

// Get all equipment items
const equipmentItems = document.querySelectorAll('.equipment-item');

// Add click event listener to each item
equipmentItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Toggle the hidden class on the equipment details div
        item.querySelector('.equipment-details').classList.toggle('hidden');
        // Toggle the hidden class on the image
        item.querySelector('img').classList.toggle('hidden');
    });
});
