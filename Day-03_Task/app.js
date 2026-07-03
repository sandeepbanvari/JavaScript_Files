let movieName = prompt("Enter movie name:");

switch (movieName.toLowerCase()) {
    case "og":
        document.body.style.backgroundImage = "url('https://cdn.district.in/movies-assets/images/cinema/OG_3_Poster-bbfa0a60-9525-11f0-8e31-21422f42f57d.jpg')";
        document.body.style.backgroundRepeat = "no-repeat"; 
        break;
    case "dragon":
        document.body.style.backgroundImage = "url('https://m.media-amazon.com/images/M/MV5BMGRhZjIzZDYtMGVhOC00ZjUxLWJjMTktYTlkMTdhYmRkZTlhXkEyXkFqcGc@._V1_.jpg')";
        document.body.style.backgroundRepeat = "no-repeat"; 
        break;
    case "salaar":
        document.body.style.backgroundImage = "url('https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg')";
        document.body.style.backgroundRepeat = "no-repeat"; 
        break;
    case "peddi":
        document.body.style.backgroundImage = "url('https://m.media-amazon.com/images/M/MV5BMmE0MjFmOTYtNDE1My00NDYxLWIyM2EtNDAzZTFkYmViYTM3XkEyXkFqcGc@._V1_.jpg')";
        
        document.body.style.backgroundRepeat = "no-repeat"; 
        break;
    case "paradise":
        document.body.style.backgroundImage = "url('https://cdn.district.in/movies-assets/images/cinema/The-Paradise_Poster-2c67d280-75d9-11f0-8df3-db01d1baa444.jpg')";
        document.body.style.backgroundRepeat = "no-repeat"; 
        break;
    default:
        alert("Movie not found");
}