
// Add two numbers using prompt method

// let a = prompt();
// let b = prompt();
// let c = alert(a + b);
// console.log(c);

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let c = alert(a + b);
// console.log(c);


// Change backgroung color using prompt method
// let color = prompt();
// document.body.style.background=color;


// Swap two numbers
// let a = 10
// let b = 20

// let temp = a
// a = b
// b = temp

// console.log('a is ' +a);
// console.log('b is ' +b);


// let a = 10
// let b = a - 1
// console.log(a);

// let personData = {
//     name : "sandeep",
//     age : 20
// };

// personData.age= 26
// console.log(personData.age);




let tweet = prompt("Enter your tweet");
if(tweet.length>50){
    alert("Your tweet is too long")
}
else{
    console.log(tweet)
    console.log("remaining char : "+(50-tweet.length))
}