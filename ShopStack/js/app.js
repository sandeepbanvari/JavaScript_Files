let products = [];
const productContainer = document.querySelector(".product-container");

async function render() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        products = await response.json();

        productContainer.innerHTML = products.slice(0, 5).map((product) => {
            return `
                 <div class="product-card">
                     <img src="${product.image}" alt="${product.title}">
                     <h3>${product.title}</h3>
                     <p>$${product.price}</p>
                     <button onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                 </div>
            `;
        }).join("");

        updateCartBadge();

    } catch (error) {
        console.log(error);
    }
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

render();