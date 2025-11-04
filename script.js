// Screen Navigation
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Modal Functions
let currentItem = null;

function showConfirmModal(itemName, itemPrice) {
    currentItem = {
        name: itemName,
        price: itemPrice
    };
    
    // Update modal content
    document.getElementById('modalItemName').textContent = itemName;
    document.getElementById('modalItemPrice').textContent = itemPrice;
    
    // Show modal
    const modal = document.getElementById('confirmModal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('confirmModal');
    modal.classList.remove('active');
    currentItem = null;
}

function confirmAddToCart() {
    if (currentItem) {
        alert(`${currentItem.name} added to cart!`);
        closeModal();
        // Here you can add actual cart functionality
        // For example: addToCart(currentItem);
    }
}

// Close modal when clicking outside
document.getElementById('confirmModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome screen by default
    showScreen('welcomeScreen');
});