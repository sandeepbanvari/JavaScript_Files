const products = [
  {
    image: "https://picsum.photos/300/200?random=1",
    title: "Wireless Headphones",
    description: "High-quality noise-canceling wireless headphones.",
    price: 2999
  },
  {
    image: "https://picsum.photos/300/200?random=2",
    title: "Smart Watch",
    description: "Track your fitness and notifications on the go.",
    price: 4999
  },
  {
    image: "https://picsum.photos/300/200?random=3",
    title: "Bluetooth Speaker",
    description: "Portable speaker with crystal-clear sound.",
    price: 1999
  },
  {
    image: "https://picsum.photos/300/200?random=4",
    title: "Laptop Backpack",
    description: "Durable backpack with multiple compartments.",
    price: 1499
  },
  {
    image: "https://picsum.photos/300/200?random=5",
    title: "Gaming Mouse",
    description: "Ergonomic mouse with customizable buttons.",
    price: 999
  },
  {
    image: "https://picsum.photos/300/200?random=6",
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard for gamers.",
    price: 2499
  },
  {
    image: "https://picsum.photos/300/200?random=7",
    title: "Power Bank",
    description: "10000mAh fast-charging power bank.",
    price: 1299
  },
  {
    image: "https://picsum.photos/300/200?random=8",
    title: "Fitness Band",
    description: "Monitor your health and daily activities.",
    price: 1799
  }
];

let cart = [];

let cont = document.getElementById("cards-container");

// Display Products
function createCard(productList) {
  let card = productList.map((item) => {
    return `
      <div class="card">
        <img src="${item.image}" alt="">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <h3>₹${item.price}</h3>
        <button onclick="addtocart(${item.price})">
          Add to Cart
        </button>
      </div>
    `;
  });

  cont.innerHTML = card.join("");
}

createCard(products);

// Search Functionality
let input = document.getElementById("input");

input.addEventListener("input", () => {
  let filtered = products.filter((item) =>
    item.title.toLowerCase().includes(input.value.toLowerCase())
  );

  createCard(filtered);
});

function addtocart(id){

    const product = products.find(item => item.id === id);

    cart.push(product);

    alert(`${product.title} added to cart`);

    document.getElementById("card").innerHTML = cart.length;

    reducep(cart);
}

// Total Price using Reduce
function reducep(datap){

    const total = datap.reduce((acc,item)=>{
        return acc + item.price;
    },0);

    document.getElementById("total").innerHTML = total;
}