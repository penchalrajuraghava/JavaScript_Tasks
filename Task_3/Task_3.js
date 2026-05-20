/* -------------------Task-3---------------------- */

// 1 .Student Login System

let username = prompt("Enter Your user name");

let password = prompt("Enter Your password");

if (username == "penchal" && password == "2789") {
  console.log("login Success");
} else {
  console.log("Invalid Success");
}

// 2. ATM Withdrawal

let balance = 5000;

let Withdraw = Number(prompt("Enter Your withdraw Balance"));

if (Withdraw <= balance) {
  console.log("With Draw Successful");
} else {
  console.log("Insufficient Balance");
}

// 3. Signal check

let Signal = prompt("Enter Your color");

switch (Signal) {
  case "red":
    console.log("stop");
    break;

  case "yellow":
    console.log("ready");
    break;

  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

// 4. Age Eligibility Checker

let age = Number(prompt("Enter Your age"));
if (age >= 18) {
  console.log("You are Eligible for vote");
} else {
  console.log("You are not eligible");
}

// 5. Shopping Discount System

let price = Number(prompt("Enter Product Price"));

if (price >= 5000) {
  console.log("20% discount");
} else if (price >= 3000) {
  console.log("10% discount");
} else {
  console.log("No discount");
}

// 6. Password Strength Checker

let Password = prompt("Enter Your password");

if (Password.length >= 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

// 7. Mobile Battery Warning

let Battery_percentage = Number(prompt("Enter Your percentage"));

if (Battery_percentage <= 10) {
  console.log("Battery Low");
} else if (Battery_percentage <= 50) {
  console.log("Battery Medium");
} else {
  console.log("Battery Full");
}

//8. Employee Salary Bonus

let salary = Number(prompt("Enter Your Salary"));
if (salary >= 50000) {
  console.log("15% Bonus");
} else if (salary >= 30000) {
  console.log("10% Bonus");
} else {
  console.log("5% Bonus");
}

//9. Online Food Order

let order_amount = Number(prompt("Enter Your order Amount"));

if (order_amount >= 499 && order_amount <= 499) {
  console.log("Free Delevery");
} else {
  console.log("Delivery Charges Added");
}

//10. Movie Ticket Booking

let Age = Number(prompt("Enter Your Age"));

if (Age <= 5) {
  console.log("Free Ticket");
} else if (Age <= 18) {
  console.log("Child Ticket");
} else {
  console.log("Adult Ticket");
}

//11. Instagram Likes Counter

for (let i = 1; i <= 5; i++) {
  console.log("like :" + i);
}

//12. Countdown Timer

let j = 5;

while (j >= 1) {
  console.log(j);
  j--;
}

//13. OTP Verification

let OTP = Number(prompt("Enter Your Otp"));
if (OTP === 1234) {
  console.log("Otp Verified");
} else {
  console.log("Invalid Otp");
}

//14. E-commerce Cart Total

let cart = [200, 500, 1000, 300];

let sum = 0;

for (let total of cart) {
  sum += total;
}
console.log("Total amount :" + sum);

//15. Student Mark Grade System

let mark = Number(prompt("Enter marks:"));

if (mark >= 90) {
  console.log(" Grade A");
} else if (mark >= 70) {
  console.log(" Grade B");
} else if (mark >= 50) {
  console.log(" Grade C");
} else {
  console.log("Fail");
}

//16. Netflix Subscription Checker

let subscription = true;

if (subscription) {
  console.log("Watch Movie");
} else {
  console.log("Buy Subscription");
}
// 17 Stock exchange

let stock = 0;

if (stock > 0) {
  console.log("Product Available");
} else {
  console.log("Out of Stock");
}

//18. Weather App Condition

let weather = prompt("Enter weather Today:");

switch (weather) {
  case "sunny":
    console.log("Go Outside");
    break;

  case "rainy":
    console.log("Take Umbrella");
    break;

  case "cold":
    console.log("Wear Jacket");
    break;

  default:
    console.log("Invalid Weather");
}

//19. User Profile Object

let user = {
  name: "Sunnyi",
  age: 24,
  city: "Bangalore",
};

for (let details in user) {
  console.log("Details :" + user[details]);
}

//20. WhatsApp Chat Array

let chats = ["hi", "hello", "How are you", "ok"];

for (chat of chats) {
  console.log(chat);
}
