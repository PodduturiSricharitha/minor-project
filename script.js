// Initialize the shopping cart
let cart = [];


// Add a product to the shopping cart
function addToCart(productName, productPrice) {
    const cartItem = {
        name: productName,
        price: productPrice,
        quantity: 1 // Initialize the quantity to 1
    };

    cart.push(cartItem);
    updateCart();
}



// Update the shopping cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Clear the cart items
    cartItemsContainer.innerHTML = '';

    // Update cart items and total
    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button>
            <button onclick="increaseQuantity(${index})">+</button>
            <span id="quantity-${index}">${item.quantity || 1}</span>
            <button onclick="decreaseQuantity(${index})">-</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * (item.quantity || 1);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}


// Remove an item from the shopping cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
// Increase the quantity of a product in the cart
function increaseQuantity(index) {
    cart[index].quantity = (cart[index].quantity || 1) + 1;
    updateQuantityDisplay(index);
    updateCart();
}

// Decrease the quantity of a product in the cart
function decreaseQuantity(index) {
    if (cart[index].quantity && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        updateQuantityDisplay(index);
        updateCart();
    }
}


// Update the displayed quantity for a product
function updateQuantityDisplay(index) {
    const quantitySpan = document.getElementById(`quantity-${index}`);
    if (quantitySpan) {
        quantitySpan.textContent = cart[index].quantity || 1;
    }
}



