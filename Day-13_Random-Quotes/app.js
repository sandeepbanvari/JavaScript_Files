const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    fetch('https://dummyjson.com/quotes?limit=1454')
        .then(res => res.json())
        .then(data => {

            let randomIndex = Math.floor(Math.random() * data.quotes.length);

            quote.textContent = data.quotes[randomIndex].quote;
            author.textContent = "" + data.quotes[randomIndex].author;

        });

});