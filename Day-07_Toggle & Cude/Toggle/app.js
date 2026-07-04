let button = document.querySelector("#theme-btn");

button.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }else{
        button.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
})