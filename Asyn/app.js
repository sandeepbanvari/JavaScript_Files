


let apiData = fetch("https://dummyjson.com/products?limit=32")
console.log(apiData);

apiData
    .then((res) => {
        console.log(res);
        return res.json()
    })
    .then((data) => {
        console.log(data);
        let a = data.products.map(i => {
            return `
     <div class="product-card">
        <img src="${i.thumbnail}" />
        <h3>${i.title}</h3>
        <p>${i.description}</p>
        <p>Rating: ${i.rating}</p>
        <p class="price">Price: ${i.price}</p>
        <button>Add to Cart</button>
        <button>Buy Now</button>
     </div>
    `
        })

        document.getElementById("productsContainer").innerHTML = a.join("");



    }).catch((err) => console.log(err))