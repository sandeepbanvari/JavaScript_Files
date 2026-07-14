let table = document.getElementById("table");

let apiData = fetch("https://dummyjson.com/users?limit=10");

async function getData() {
    let response = await apiData;
    let data = await response.json();
    let { users } = data;

    // console.log(users);
    addData(users);
}

getData();

function addData(users) {

    let data = users.map((i) => {
        return `
        
        <tr>
            <td>${i.id}</td>
            <td>${i.firstName}</td>
            <td>${i.lastName}</td>
            <td>${i.age}</td>
            <td>${i.email}</td>
            <td>${i.gender}</td>
            <td>${i.role}</td>
            <td>${i.phone}</td> 
        </tr>`;
    });

    table.innerHTML = data.join("");
}
