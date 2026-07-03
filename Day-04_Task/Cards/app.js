const products = [
    {
        id: "s26u",
        title: "Samsung Galaxy S26 Ultra",
        image: "https://m.media-amazon.com/images/I/719aT+U7WRL._AC_UF1000,1000_QL80_.jpg",
        description: "200MP Quad Camera, Snapdragon 8 Elite Gen 5, 6.9-inch 120Hz display.",
        price: 159990,
        button: "Add to Cart"
    },
    {
        id: "iph18p",
        title: "Apple iPhone 18 Pro",
        image: "https://www.whatmobile.com.pk/control/news/assets/20042026/d7a89c23a7d486e4b1c2680cf1bfd3e5.jpg",
        description: "A20 Pro chip, 5200mAh battery, Variable aperture camera.",
        price: 145000,
        button: "Add to Cart"
    },
    {
        id: "px11",
        title: "Google Pixel 11 Pro",
        image: "https://images.hindustantimes.com/tech/htmobile4/google-pixel-11-pro-xl/heroimage/Google-Pixel-11-Pro-XL.jpg?impolicy=new-ht-20210112&width=500&height=500",
        description: "Tensor G6 chip, AI-driven photography, 12GB RAM.",
        price: 89999,
        button: "Add to Cart"
    },
    {
        id: "op16",
        title: "OnePlus 16",
        image: "https://cms-assets.bajajfinserv.in/is/image/bajajfinance/20260109080517_OnePlus15RAceEdition?scl=1",
        description: "2.8M AnTuTu score, 150W fast charging, AMOLED 144Hz.",
        price: 89990,
        button: "Add to Cart"
    },
    {
        id: "zfold7",
        title: "Samsung Galaxy Z Fold 7",
        image: "https://m.media-amazon.com/images/I/619Z1QHCy-L._AC_UF1000,1000_QL80_.jpg",
        description: "Slimmer 5.5mm foldable, 200MP camera, 512GB storage.",
        price: 175000,
        button: "Add to Cart"
    },
    {
        id: "motog70",
        title: "Motorola Edge 70 Fusion",
        image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/r/i/8/-original-imahh5xjfmygs7g3.jpeg?q=70",
        description: "7000mAh battery, 68W charging, 13MP ultrawide, 6.8-inch.",
        price: 24999,
        button: "Add to Cart"
    },
    {
        id: "vivoV70",
        title: "Vivo V70 Elite",
        image: "https://m.media-amazon.com/images/I/71w5ntQwF9L._AC_UF1000,1000_QL80_.jpg",
        description: "Zeiss optics, 200MP camera, Snapdragon 8s Gen 4.",
        price: 49999,
        button: "Add to Cart"
    },
    {
        id: "rednote16",
        title: "Redmi Note 16 Pro",
        image: "https://www.androidcrunch.com/wp-content/uploads/2025/08/Xiaomi-Redmi-Note-15-Pro-600x600.webp",
        description: "108MP camera, 5500mAh battery, Snapdragon 7s Gen 3.",
        price: 26000,
        button: "Add to Cart"
    },
    {
        id: "px9a",
        title: "Google Pixel 9a",
        image: "https://vsprod.vijaysales.com/media/catalog/product/g/o/google-pixel-9a-osidian_1_.jpg?optimize=medium&fit=bounds&height=500&width=500",
        description: "Mid-range champion, Tensor G4, 7 years OS updates.",
        price: 35000,
        button: "Add to Cart"
    },
    {
        id: "op15r",
        title: "OnePlus 15R",
        image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/319656_0_bAWkkfUyr.png?updatedAt=1765887986870?tr=w-360",
        description: "Flagship performance, 50MP Camera, 12GB RAM.",
        price: 48397,
        button: "Add to Cart"
    }
];


let productsContainer = document.getElementById("products");

products.forEach(product => {
    productsContainer.innerHTML += `
    <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <mark>₹${product.price}</mark>
        <button>${product.button}</button>
    </div>
    `;
});