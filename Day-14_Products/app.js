import { apiData } from "./logic.js";

let container = document.getElementById("products-container");
let value = document.getElementById("value");
let storage  = JSON.parse(localStorage.getItem("cart")) || [];
let data = await apiData();

function renderProducts(items) {

    const cards = items.map((i) => {
        return `
        <div class="product-card">
            <img src="${i.thumbnail}" alt="${i.title}">
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <mark>₹${i.price}</mark>
            <button onclick="addProducts(${i.id})">Add to Cart</button>
        </div>
        `;
    });

    container.innerHTML = cards.join("");
}

renderProducts(data);




window.fillD = ()=>{
    let search = document.getElementById('sea').value;
    let filtered = data.filter((items) =>items.title.toLowerCase().includes(search)
    );
    renderProducts(filtered);
}