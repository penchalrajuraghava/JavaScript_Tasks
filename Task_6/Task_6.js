/* 
1. Employee Bonus Filter
Concept:
filter(), map()
Task:
You have employee salaries.
Find employees whose salary is greater than 300000 and print:
"Congrats <name>"
Input:
let employees = [
  {name:"john", salary:200000},
  {name:"rahul", salary:500000},
  {name:"siva", salary:700000}
]
Expected Output:
Congrats rahul
Congrats siva
2. Shopping Cart Total
Concept:
reduce()
Task:
Calculate total bill amount.
Input:
let cart = [1200, 3400, 500, 999]
Expected Output:
6099
3. Login Username Formatter
Concept:
slice(), toUpperCase()
Task:
Convert first letter into capital.
Input:
let user = "naveen"
Expected Output:
Naveen
4. OTP Checker
Concept:
includes()
Task:
Check whether OTP contains number 0.
Input:
let otp = "560890"
Expected Output:
Valid OTP
Else:
Invalid OTP
5. Food Delivery App
Concept:
push(), pop()
Task:
Add new order and remove delivered order.
Input:
let orders = ["burger","pizza"]
Process:
Add "shawarma"
Remove last order
Expected Output:
["burger","pizza"]
6. Attendance Checker
Concept:
every()
Task:
Check whether all students passed.
Input:
let marks = [40,50,70,80]
Condition:
mark >= 35
Expected Output:
true
7. Find VIP Customer
Concept:
find()
Task:
Find first customer whose purchase is greater than 10000.
Input:
let customer = [
  {name:"arun", purchase:5000},
  {name:"vijay", purchase:15000},
  {name:"surya", purchase:25000}
]
Expected Output:
vijay
8. Reverse Chat Message
Concept:
split(), reverse(), join()
Task:
Reverse the message.
Input:
let msg = "hello"
Expected Output:
olleh
9. Remove Duplicate Product
Concept:
indexOf()
Task:
Find position of "mobile".
Input:
let products = ["tv","laptop","mobile","watch"]
Expected Output:
2
10. Student Rank Sort
Concept:
sort()
Task:
Sort marks ascending order.
Input:
let marks = [99,45,12,67,89]
Expected Output:
[12,45,67,89,99]
11. Movie Search
Concept:
some()
Task:
Check whether "Leo" movie exists.
Input:
let movies = ["Jailer","Leo","Vikram"]
Expected Output:
true
12. Hide Mobile Number
Concept:
slice()
Task:
Show only last 4 digits.
Input:
let num = "6383366774"
Expected Output:
6774
13. Online Exam Result
Concept:
ternary operator
Task:
If mark >= 35 print "Pass" else "Fail".
Input:
let mark = 78
Expected Output:
Pass
14. Cab Booking Price
Concept:
function, return
Task:
Create function for total fare.
Input:
baseFare = 100
extraKm = 50
Expected Output:
150
15. Instagram Hashtag Generator
Concept:
replaceAll()
Task:
Convert spaces into _
Input:
let tag = "web developer"
Expected Output:
web_developer
16. Netflix Kids Content
Concept:
filter()
Task:
Get only movies below age 18.
Input:
let movies = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
]
Expected Output:
A
C
17. E-commerce Product Search
Concept:
startsWith()
Task:
Check whether product starts with "i".
Input:
let product = "iphone"
Expected Output:
true
18. WhatsApp Group Names
Concept:
forEach()
Task:
Print all group names with numbering.
Input:
let groups = ["office","friends","family"]
Expected Output:
1 office
2 friends
3 family
19. Salary Highest Finder
Concept:
reduce()
Task:
Find highest salary.
Input:
let salary = [20000,50000,70000,10000]
Expected Output:
70000
20. Password Security Checker
Concept:
length, includes()
Task:
Password should:
contain @
minimum 8 characters
Input:
let password = "navi@123"
Expected Output:
Strong Password
*/

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
