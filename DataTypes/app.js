// ===========================
// 1. NUMBER (used in math, prices, counters, scores)
// ===========================

// Example 1: E-commerce total price
const itemPrice = 499.99;
const tax = 0.18;
const finalPrice = itemPrice + itemPrice * tax;
console.log("Final Price:", finalPrice);

// Example 2: Average rating system
const ratings = [4, 5, 3, 5, 4];
const avg = ratings.reduce((a, b) => a + b) / ratings.length;
console.log("Average Rating:", avg);

// Example 3: Likes counter
let likes = 120;
likes++;
console.log("Updated Likes:", likes);

// Example 4: Bank account balance
let balance = 10000;
balance -= 2500; // withdrawal
console.log("Balance:", balance);

// Example 5: Timer countdown
let timer = 5;
const interval = setInterval(() => {
  console.log("Time left:", timer);
  timer--;
  if (timer < 0) clearInterval(interval);
}, 1000);


// ===========================
// 2. STRING (used in messages, templates, formatting)
// ===========================

// Example 1: Greeting a user
const username = "Vamsee";
console.log(`Hello, ${username}!`);

// Example 2: Email template
const email = `
Hi John,
Your order #12345 has been shipped.
Track it at https://shop.com/track/12345
`;
console.log(email);

// Example 3: SEO-friendly URL slug
const title = "JavaScript Data Types in Production";
const slug = title.toLowerCase().replace(/ /g, "-");
console.log("Slug:", slug);

// Example 4: Logging an error
const error = "Invalid user credentials!";
console.error(error);

// Example 5: Chat message
function chatMessage(user, msg) {
  return `${user}: ${msg}`;
}
console.log(chatMessage("Nobitha", "Hello team!"));


// ===========================
// 3. BOOLEAN (used in flags, permissions, conditions)
// ===========================

// Example 1: Login check
const isLoggedIn = true;
if (isLoggedIn) console.log("User logged in");

// Example 2: Dark mode toggle
const darkMode = false;
console.log(darkMode ? "Dark Theme Enabled" : "Light Theme Enabled");

// Example 3: Product availability
const inStock = true;
console.log(inStock ? "Add to cart" : "Out of stock");

// Example 4: Admin permissions
const isAdmin = true;
if (isAdmin) console.log("Access granted to admin panel");

// Example 5: Email validation
const isEmailValid = "test@example.com".includes("@");
console.log("Valid Email?", isEmailValid);


// ===========================
// 4. NULL (intentional empty values)
// ===========================

// Example 1: No address added yet
let address = null;
console.log("Address:", address);

// Example 2: Search result not found
let searchResult = null;
console.log("Search Result:", searchResult);

// Example 3: Optional field in a form
let middleName = null;
console.log("Middle Name:", middleName);

// Example 4: API returns null when no data
let userLocation = null;
console.log("User Location:", userLocation);

// Example 5: Resetting a value
let selectedProduct = "Laptop";
selectedProduct = null; // reset selection
console.log("Selected Product:", selectedProduct);


// ===========================
// 5. UNDEFINED (missing values)
// ===========================

// Example 1: Declared but not assigned
let emailId;
console.log("Email ID:", emailId);

// Example 2: Function parameter not passed
function greet(name) {
  console.log("Hello,", name);
}
greet(); // undefined

// Example 3: Missing object property
const user = { name: "Krishna" };
console.log(user.age); // undefined

// Example 4: Array out of range
const numbers = [1, 2, 3];
console.log(numbers[10]); // undefined

// Example 5: Function without return
function doNothing() {}
console.log(doNothing()); // undefined


// ===========================
// 6. BIGINT (huge integer values)
// ===========================

// Example 1: Large number storage
const big = 123456789012345678901234567890n;
console.log(big);

// Example 2: Adding BigInts
const b1 = 9007199254740991n;
const b2 = 10n;
console.log(b1 + b2);

// Example 3: Database IDs
const orderId = 987654321987654321987654321n;
console.log("Order ID:", orderId);

// Example 4: Blockchain transaction amount
const transactionAmount = 1000000000000000000n; // 1 ETH in wei
console.log("Transaction:", transactionAmount);

// Example 5: High-precision counter
let counter = 1n;
counter++;
console.log("Counter:", counter);


// ===========================
// 7. SYMBOL (unique identifiers)
// ===========================

// Example 1: Unique object keys
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false (unique)

// Example 2: Avoiding property collisions
const userObj = {};
const uniqueKey = Symbol("userId");
userObj[uniqueKey] = 101;
console.log(userObj);

// Example 3: Hiding private properties
const password = Symbol("password");
const account = {
  username: "vamsee",
  [password]: "superSecret"
};
console.log(account.username); // "vamsee"
// console.log(account.password) // undefined

// Example 4: Enum-like constants
const ROLES = {
  ADMIN: Symbol("ADMIN"),
  USER: Symbol("USER"),
  GUEST: Symbol("GUEST")
};
console.log(ROLES.ADMIN);

// Example 5: Singleton pattern
const LOGGER = Symbol.for("logger");
const logger1 = Symbol.for("logger");
console.log(LOGGER === logger1); // true



// ============================================
// NON-PRIMITIVE DATA TYPES
// Arrays, Objects, Array of Objects
// ============================================


// ===========================
// 1. ARRAYS (ordered collections)
// ===========================

// Example 1: Shopping cart items
const cart = ["Laptop", "Phone", "Headphones"];
console.log("Cart:", cart);

// Example 2: Student marks
const marks = [85, 92, 76, 89, 95];
const average = marks.reduce((a, b) => a + b) / marks.length;
console.log("Average Marks:", average);

// Example 3: Navigation menu
const menu = ["Home", "About", "Services", "Contact"];
menu.forEach(item => console.log("Menu:", item));

// Example 4: Search suggestions
const suggestions = ["JavaScript", "Java", "Python", "PHP"];
console.log("First Suggestion:", suggestions[0]);

// Example 5: Playlist (music player)
const playlist = ["Song A", "Song B", "Song C"];
playlist.push("Song D");
console.log("Updated Playlist:", playlist);


// ===========================
// 2. OBJECTS (key-value pairs)
// ===========================

// Example 1: User profile
const userProfile = {
  name: "Vamsee",
  age: 27,
  email: "vamsee@example.com"
};
console.log("User:", userProfile.name);

// Example 2: Product details
const product = {
  id: 101,
  name: "Laptop",
  price: 75000,
  inStock: true
};
console.log("Product:", product);

// Example 3: Config settings
const config = {
  theme: "dark",
  notifications: true,
  language: "en"
};
console.log("Language:", config.language);

// Example 4: API response (user info)
const apiResponse = {
  status: "success",
  data: { id: 1, name: "Krishna" }
};
console.log("API User:", apiResponse.data.name);

// Example 5: Order summary
const order = {
  orderId: "ORD1234",
  totalAmount: 2500,
  status: "Shipped"
};
console.log("Order Status:", order.status);


// ===========================
// 3. ARRAY OF OBJECTS
// (very common in production apps)
// ===========================

const users = [
  { id: 1, name: "Vamsee", role: "Frontend Developer", isActive: true },
  { id: 2, name: "Krishna", role: "Backend Developer", isActive: false },
  { id: 3, name: "Sowjanya", role: "UI/UX Designer", isActive: true },
  { id: 4, name: "Nobitha", role: "Full Stack Developer", isActive: true }
];

// Example 1: Display all user names
users.forEach(u => console.log("User:", u.name));

// Example 2: Get active users
const activeUsers = users.filter(u => u.isActive);
console.log("Active Users:", activeUsers);

// Example 3: Find a specific user
const krishna = users.find(u => u.name === "Krishna");
console.log("Found User:", krishna);

// Example 4: Map roles
const roles = users.map(u => u.role);
console.log("Roles:", roles);

// Example 5: Update user status (immutably)
const updatedUsers = users.map(u =>
  u.id === 2 ? { ...u, isActive: true } : u
);
console.log("Updated Users:", updatedUsers);
