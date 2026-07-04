let inputV = document.getElementById('input')
let btn = document.getElementById('btn')
let list = document.getElementById('list')

let storageData = JSON.parse(localStorage.getItem('friend')) || []

function addData(){
    let data = storageData.map(i=>{
        return `<li>${i}</li>`
    })

    list.innerHTML = data.join('')
}
btn.addEventListener('click',()=>{
    let friendsData = inputV.value.trim();

    if(friendsData){
        storageData.push(friendsData)
        localStorage.setItem('friend',JSON.stringify(storageData))
        
        inputV.value = ''

        addData()

    }
})

addData()