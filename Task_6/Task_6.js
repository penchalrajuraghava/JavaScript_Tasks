// 1. 1. Employee Bonus Filter

let employees = [
  { name: "john", salary: 200000 },
  { name: "rahul", salary: 500000 },
  { name: "siva", salary: 700000 },
];

employees
  .filter((emp) => emp.salary > 300000)
  .map((emp) => console.log(emp.name));

// 2.   Shopping Cart Total

let cart = [1200, 3400, 500, 999];

let total_cart = cart.reduce((product, price) => product + price);

console.log(total_cart);

// 3. Login Username Formatter

let name = "penchal";

let first_letter = name.slice(0, 1).toUpperCase();

let remaing_letter = name.slice(1);

let final = first_letter + remaing_letter;

console.log(final);

// 4. OTP Checker

let Otp = "560890";

if (Otp.includes("0")) {
  console.log("Valid Otp");
} else {
  console.log("Invalid Otp");
}

// 5. Food Delivery App

let orders = ["burger", "pizza"];

orders.push("Shawarma");
orders.pop();
console.log(orders);

// 6. Attendance Checker

let marks = [40, 50, 70, 80];

let mark1 = marks.every((mark) => mark >= 35);
console.log(mark1);

// 7. Find VIP Customer

let customer = [
  { name: "arun", purchase: 5000 },
  { name: "vijay", purchase: 15000 },
  { name: "surya", purchase: 25000 },
];

let vip_customer = customer.find((a) => a.purchase > 10000);
console.log(vip_customer.name);

// 8. Reverse Chat Message

let msg = "Hi How are You    ";

let reversed = msg.trim().split("").reverse().join("");

console.log(reversed);

// 9. Remove Duplicate Product

let products = ["tv", "laptop", "mobile", "watch"];

let find_pos = products.indexOf("mobile");
console.log(find_pos);

// 10. Student Rank Sort

let marks4 = [99, 45, 12, 67, 89];

let ass = marks4.sort((a, b) => a - b);

console.log(ass);

// 11. Movie Search

let movies = ["Jailer", "Leo", "Vikram"];

let movie_find = movies.some((c) => c === "Leo");
console.log(movie_find);

// 12. Hide Mobile Number

let num = "6383366774";

let res = num.slice(-4);
console.log(res);

// 13. Online Exam Result

let marks5 = 75;

console.log(marks5 >= 35 ? "Pass" : "Fail");

// 14. Cab Booking Price

function cabbook(baseFare, ExtraKm) {
  return baseFare + ExtraKm;
}

let Result = cabbook(100, 50);
console.log(Result);

let tag = "web developer";

let final_output = tag.replaceAll(" ", "_");

console.log(final_output);

let movies1 = [
  { name: "A", age: 13 },
  { name: "B", age: 18 },
  { name: "C", age: 10 },
];

let move = movies1.filter((m) => m.age < 18);
move.forEach((ag) => console.log(ag.name));

// 17. E-commerce Product Search

let product = "iphone";

let start = product.startsWith("i");

console.log(start);

// 18. WhatsApp Group Names

let groups = ["office", "friends", "family"];

groups.forEach((names, index) => {
  console.log(`${index + 1} ${names}`);
});

// 19. Salary Highest Finder

let salary = [20000, 50000, 70000, 10000];

let highest_salary = salary.reduce((max, min) => {
  return max > min ? max : min;
});

console.log(highest_salary);

// 20. Password Security Checker

let password = "penchal@123";

if (password.includes("@") && password.length >= 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}
