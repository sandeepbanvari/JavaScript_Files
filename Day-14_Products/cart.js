let container = document.getElementById('cart-container')

let data = JSON.parse(localStorage.getItem('cart')) || [];


function addProducts(item) {
    let card = data.map((i)=>{
        return `
        <div class="product-card">
            <img src="${i.thumbnail}" alt="${i.title}">
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <mark>₹${i.price}</mark>
            <button>Add to Cart</button>
        </div>
        `
    })

    container.innerHTML = card.join('')
    
}

addProducts()


