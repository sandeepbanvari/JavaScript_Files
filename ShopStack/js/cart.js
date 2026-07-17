const cartItemsContainer = document.getElementById("cart-items");
const cartLayout = document.getElementById("cart-layout");
const emptyCartView = document.getElementById("empty-cart");
const subtotalElement = document.getElementById("cart-subtotal");
const totalElement = document.getElementById("cart-total");

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartBadge() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector(".cart-count");
    if (badge) {
        badge.textContent = count;
    }
}

function renderCart() {
    const cart = getCart();
    updateCartBadge();

    if (cart.length === 0) {
        if (cartLayout) cartLayout.style.display = "none";
        if (emptyCartView) emptyCartView.style.display = "block";
        return;
    }

    if (cartLayout) cartLayout.style.display = "grid";
    if (emptyCartView) emptyCartView.style.display = "none";

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>Unit Price: $${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-qty">
                    <button onclick="changeQuantity(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="cart-item-price">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
                <button class="cart-item-remove" onclick="removeItem(${item.id})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `).join("");
    }

    calculateSummary(cart);
}

function changeQuantity(productId, amount) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    saveCart(cart);
    renderCart();
}
window.changeQuantity = changeQuantity;

function removeItem(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}
window.removeItem = removeItem;

function calculateSummary(cart) {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${subtotal.toFixed(2)}`;
}

function checkout() {
    alert("Thank you for shopping with ShopStack! Your order has been placed successfully.");
    localStorage.removeItem("cart");
    renderCart();
}
window.checkout = checkout;

 Initialize on page load
renderCart();
