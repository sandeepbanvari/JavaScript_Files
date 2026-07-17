let products = [];

const productContainer = document.querySelector(".product-container");
const searchInput = document.getElementById("search");

async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        products = await response.json();
        render(products);
        updateCartBadge();
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function render(data) {
    productContainer.innerHTML = data.map(i => `
        <div class="product-card">
            <img src="${i.image}" alt="${i.title}">
            <h3>${i.title}</h3>
            <p>$${i.price}</p>
            <button onclick="addToCart(${i.id})"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
    `).join("");
}

function search() {
    const value = searchInput.value.toLowerCase();
    const filtered = products.filter(i =>
        i.title.toLowerCase().includes(value)
    );
    render(filtered);
}
window.search = search;

// Backwards compatibility with event listener
if (searchInput) {
    searchInput.addEventListener("input", search);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}
window.addToCart = addToCart;

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector(".cart-count");
    if (badge) {
        badge.textContent = count;
    }
}
window.updateCartBadge = updateCartBadge;

getProducts();
