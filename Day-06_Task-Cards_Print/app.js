const products = [
  {
    image: "https://avshack.in/cdn/shop/products/JBL-Tune-760NC-Black-Wireless-Over-Ear-Headphones-JBLT760NCBLKAM_jpg.png?v=1646634100&width=1214",
    productName: "JBL Tune 760NC",
    description: "Wireless over-ear headphones with active noise cancellation.",
    buttonText: "Add to Cart"
  },
  {
    image: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard4_0e420743-5ca4-439a-9992-42347e8452b2_1800x.png?v=1747388018",
    productName: "Boat Airdopes 141",
    description: "True wireless earbuds with 42 hours of playback.",
    buttonText: "Add to Cart"
  },
  {
    image: "https://vlebazaar.in/image/cache/catalog/OnePlus-Bullets-Z2-Bluetooth-Wireless-Earphones-with-Mic-Bombastic-Bass-/OnePlus-Bullets-Z2-Bluetooth-Wireless-Earphones-with-Mic-Bombastic-Bass-124-Mm-D-1500x1500.jpg",
    productName: "OnePlus Bullets Z2",
    description: "Bluetooth neckband with fast charging and deep bass.",
    buttonText: "Add to Cart"
  },
  {
    image: "https://m.media-amazon.com/images/I/613Znd0DHhL._AC_UF1000,1000_QL80_.jpg",
    productName: "JBL Flip 6",
    description: "Portable Bluetooth speaker with powerful sound.",
    buttonText: "Add to Cart"
  },
  {
    image: "https://m.media-amazon.com/images/I/61IYppaanVL.jpg",
    productName: "Noise ColorFit Pro 5",
    description: "Smartwatch with AMOLED display and health tracking.",
    buttonText: "Add to Cart"
  }
];

let product_container = document.getElementById("product-container")
let btn_container = document.getElementById("btn-container")

let btn = document.createElement('button')
btn.textContent = 'Show Cards'
// console.log(btn);
btn_container.append(btn)


let total = 0
btn.addEventListener("click",()=>{
    let product = products[total]

    const card = document.createElement('div')
    card.className = "card";

    const image = document.createElement('img')
    image.src = product.image;
    
    const title = document.createElement('h2')
    title.textContent = product.productName;


    const desc = document.createElement('p')
    desc.textContent = product.description;

    const submit = document.createElement('button')
    submit.textContent = product.buttonText;

    card.append(image, title, desc, submit)

    product_container.append(card)

    total++

    if(total === 5){
        btn.disabled = true;
        btn.textContent = 'Limit reached';
    }


})

