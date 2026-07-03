// This capitalizes only the first letter of the entered name
let name = prompt("Enter the name: ");

if (name) {
    let text = name.charAt(0).toUpperCase() + name.slice(1);
    alert(text);
} else {
    alert("Please enter a name.");
}


let names = ['sandeep', 'ameen', 'harsh', 'pradeep', 'mohan', 'kartheeek'];

let text = prompt('Enter Your Name:').toLowerCase().trim();

if (names.includes(text)) {
    let formattedName = text.charAt(0).toUpperCase() + text.slice(1);
    alert(`Welcome to the Party ${formattedName} 🙌 `);
} else {
    alert('You are not invited');
}

