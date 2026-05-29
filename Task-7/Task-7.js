// 1.E-Commerce Product Filter

let Api = "https://fakestoreapi.com/products/";

fetch(Api)
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    products.filter((item) => {
      return item.price >= 100 && item.category === "electronics";
    });

    products.forEach((product) => {
      console.log("Title", product.title);
      console.log("Price", product.price);
      console.log("----------------------");
    });
  });

// 2. Online Shopping Cart Total

let cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 },
];

let total = cart.reduce((a, b) => {
  return a + b.price * b.qty;
}, 0);

console.log("Total Price of the cart :", total);

// 3. Employee Salary Dashboard

let employees = [
  { name: "John", salary: 25000 },
  { name: "Sam", salary: 50000 },
  { name: "Ravi", salary: 45000 },
  { name: "Kumar", salary: 30000 },
];

let salary_Dashboard = employees
  .filter((em) => em.salary >= 40000)
  .map((empl) => {
    console.log(empl.name);
  });

// 4. Food Delivery App

let hotels = [
  { hotel: "A2B", rating: 4.1 },
  { hotel: "KFC", rating: 4.7 },
  { hotel: "Dominos", rating: 4.3 },
];

let Rating = hotels.find((hot) => {
  return hot.rating >= 4.5;
});

console.log(Rating);

// 5.  Student Pass/Fail System

let marks = [45, 67, 89, 90, 34];

let stud = marks.every((mark) => mark >= 35);

console.log(stud);

// 6. OTP Verification System

let otpList = [1234, 4567, 7890, 9876];

otp = 7890;

console.log(otpList.includes(otp));

// 7. Movie Booking Timer

let count = 10;

let Booking_timer = setInterval(() => {
  console.log(count);

  count--;

  if (count < 0) {
    clearInterval(Booking_timer);
    console.log("Booking was closed");
  }
}, 1000);

// 8. Instagram Like Counter

let likes = 0;

let likes_count = setInterval(() => {
  likes++;

  console.log("Likes :", likes);

  if (likes >= 10) {
    clearInterval(likes_count);
    console.log("stopped");
  }
}, 1000);

// 9. Login Authentication

let username = "admin";
let password = "12345";

let admin_Username = "admin";
let admin_Password = "12345";

if (admin_Username === username && admin_Password === password) {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}

// 10. Weather App Simulation

let internet = true;

let weather_data = new Promise((resolve, reject) => {
  if (internet) {
    resolve("weather data");
  } else {
    reject("no internet");
  }
});

weather_data
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//  11. Amazon Product Search

let Amazon_products = [
  "shirt",
  "watch",
  "formal shirt",
  "spects",
  "check shirt",
];

let shirts_search = Amazon_products.filter((pro) =>
  pro.toLocaleLowerCase().includes("shirt"),
);
console.log(shirts_search);

// 12. YouTube Video Duration

let videos = [10, 20, 30, 40];

let total_duration = videos.reduce((a, b) => {
  return a + b;
}, 0);

console.log("total duration :", total_duration);

// 13. Swiggy Order Status

let food_status = "Preparing";

switch (food_status) {
  case "Placed":
    console.log("Order Placed Successfully");
    break;

  case "Preparing":
    console.log("Restaurant is Preparing Your Order");
    break;

  case "Out for Delivery":
    console.log("Delivery Partner is on the Way");
    break;

  case "Delivered":
    console.log("Order Delivered");
    break;

  default:
    console.log("Invalid Status");
}

// 14. WhatsApp Chat Analyzer

let chats = ["hi", "hello", "where", "ok", "bye"];

let counter = 0;

for (let i = 0; i < chats.length; i++) {
  counter++;
}
console.log("total messages :", counter);

// 15. Netflix Age Restriction

let age = 20;

let final_result = age >= 18 ? "Watch Movie" : "Access Denied";

console.log(final_result);

// 16. Flipkart Product Sorting

let prices = [1200, 450, 9999, 2500, 700];

let price_sort = prices.sort((a1, b1) => {
  return a1 - b1;
});
console.log(price_sort);

// 17. Employee Attendance

let attendance = ["present", "absent", "present"];

let result = attendance.reduce((acc, status) => {
  acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});

console.log(result);

// 18. Banking System

let balance = 500;

function deposit(amount) {
  balance += amount;
  console.log("succesfully deposited:", amount);
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log("succesfully withdraw", amount);
  } else {
    console.log("insufficent funds:");
  }
}

function checbalance() {
  console.log("balance :", balance);
}

deposit(10000);
withdraw(5000);
checbalance();

// 19. Zomato Rating Checker

let ratings = [4.5, 3.8, 2.5, 4.2];

let lowRating = ratings.some((rating) => rating < 3);

console.log(lowRating);
