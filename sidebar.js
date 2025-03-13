// Initialize the cart state
let cart = [];
let cartCounter = document.getElementById('cartCounter');
let cartSidebar = document.querySelector('.cart-sidebar');

// Open and close the cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle('open');
  if (cartSidebar.classList.contains('open')) {
    updateCartUI();
  }
}

// Add item to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    // Update cart counter and UI
    updateCartCounter();
    updateCartUI();
  });
});

// Update cart counter
function updateCartCounter() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCounter.textContent = totalQuantity;
}

// Update cart UI
function updateCartUI() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    return;
  }

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
      <img src="desert${index + 1}.jpg" alt="${item.name}">
      <div class="item-details">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
      </div>
      <div class="quantity-controls">
        <button onclick="changeQuantity(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity(${index}, 1)">+</button>
      </div>
      <i class="fas fa-trash-alt remove-item" onclick="removeItem(${index})"></i>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  // Update total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.querySelector('.cart-footer p').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Change item quantity
function changeQuantity(index, change) {
  const item = cart[index];
  item.quantity += change;

  if (item.quantity <= 0) {
    cart.splice(index, 1); // Remove item if quantity is zero
  }

  updateCartCounter();
  updateCartUI();
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCartCounter();
  updateCartUI();
}

// Close cart sidebar
function closeCart() {
  cartSidebar.classList.remove('open');
}




// Open Payment Modal
function openPaymentModal() {
  if (cart.length === 0) {
    alert('Your cart is empty. Add items to proceed.');
    return;
  }
  document.getElementById('paymentModal').style.display = 'flex';
}

// Close Payment Modal
function closePaymentModal() {
  document.getElementById('paymentModal').style.display = 'none';
}

// Place Order
function placeOrder() {
  const fullName = document.getElementById('fullName').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zipCode').value;

  // Validate inputs
  if (!fullName || !address || !city || !zipCode) {
    alert('Please fill in all delivery details.');
    return;
  }

  // Show confirmation popup
  document.getElementById('customerName').textContent = fullName;
  document.getElementById('orderConfirmationPopup').style.display = 'flex';

  // Clear cart and update UI
  cart = [];
  updateCartCounter();
  updateCartUI();
  closePaymentModal();
}

// Close Order Confirmation Popup
function closeOrderConfirmation() {
  document.getElementById('orderConfirmationPopup').style.display = 'none';
}

// Attach event listener to Checkout Button
document.querySelector('.checkout-btn').addEventListener('click', openPaymentModal);