// cartButton and addToCart button
        // Sample products data
        const products = [
            { id: 1, name: 'Product 1', price: 20.00 },
            // Add more products as needed
        ];
    
        let cart = [];
    
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCartIcon();
        }
    
        function openCart() {
            updateCartModal();
            const cartModal = document.getElementById('cartModal');
            if (cartModal) {
                cartModal.classList.add('show');
                cartModal.style.display = 'block';
            }
        }
    
        function updateCartIcon() {
            const cartButton = document.getElementById('cartButton');
            if (cartButton) {
                cartButton.innerHTML = `Cart (${cart.length})`;
            }
        }
    
        function updateCartModal() {
            const cartItems = document.getElementById('cartItems');
            if (cartItems) {
                cartItems.innerHTML = '';
    
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
                    cartItems.appendChild(cartItem);
                });
            }
        }
    
        // JavaScript functions to update the cart modal and navigate to the cart page.
        function updateCartModal() {
            const cartItems = document.getElementById('cartItems');
            if (cartItems) {
                cartItems.innerHTML = '';
        
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
                    cartItems.appendChild(cartItem);
                });
            }
        }
        
        function viewCart() {
            // Redirect to the cart page
            window.location.href = 'cart.html'; // Replace 'cart.html' with the actual path to your cart page
        }
        // Sample cartItems array with product IDs
const cartItems = [
    { productId: 1, name: 'Product 1', price: 20.00, quantity: 2 },
    { productId: 2, name: 'Product 2', price: 15.00, quantity: 1 },
    // Add more items as needed
];

function updateCartModal() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Clear previous content

    // Iterate through the cart items and append them to the modal
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} (ID: ${item.productId}) - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });
}
