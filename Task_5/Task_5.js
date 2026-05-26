//-------------------- Java Script Task-5 -----------------------

// Task-1 Spread Operator

let frontend = ["Html", "Css", "JavaScript", "react"];

let backend = ["Java", "Spring-boot", "Microservices", "mysql"];

let merge = [...frontend, ...backend];

console.log(merge);

// task -2  Copy Array

let original = [1, 2, 3];

let copied = [...original];

copied.push(4);

console.log(`original array: ${original}`);
console.log(`copied array: ${copied}`);

// Task 3 — Object Merge

let student1 = {
  name: "penchal",
};

let student2 = {
  role: "Developer",
};

let mergobject = { ...student1, ...student2 };

console.log(mergobject);

// Task 4 — Rest Operator

function rest_operator(a, b, ...rest) {
  console.log(`a : ${a}`);
  console.log(`b : ${b}`);
  console.log(`remaining values : ${rest}`);
  console.log(`total vaues : ${rest.length}`);
}

rest_operator(2, 4, 8, 7, 8, 9, 5, 4, 6, 4, 70);

// Task 5 — Array Destructuring

let colors = ["red", "green", "blue", "yellow"];

let [a, b, c, d] = colors;

console.log(c);

// Task 6 — Nested Array Destructuring

let data = [1, [2, [3, [4]]]];

let [a1, [a2, [a3, [a4]]]] = data;

console.log(a1, a2, a3, a4);

// Task 7 — Object Destructuring

let mobile = {
  brand: "Samsung",
  price: 20000,
  color: "black",
};

let { brand, price, color } = mobile;

console.log(brand, color);

//Task 8 — push() & pop()

let numbers = [1, 2, 3];
numbers.push(4, 5, 6);
numbers.pop();

console.log(numbers);

// Task 9 — shift() & unshift()

let fruits = ["banana", "orange"];

fruits.unshift("kiwi");
fruits.shift();
console.log(fruits);

// Task 10 — splice()

let arr = [1, 2, 30, 40, 5, 6];

arr.splice(2, 2, 2, 3, 4);
console.log(arr);

// Task 11 — concat()

let arr1 = [1, 2];
let arr2 = [3, 4];

let merger_array = arr1.concat(arr2, 5, 6);
console.log(merger_array);

// Task 12 — slice()

let marks = [10, 20, 30, 40, 50, 60];

let sice = marks.slice(2, 5);

console.log(sice);

// Task 13 — flat()

let nest = [1, [2, [3, [4, [5]]]]];

let final_result = nest.flat(Infinity);

console.log(final_result);

// Task 14 — fill()

let arr3 = [1, 2, 3, 4, 5];
arr3.fill("done", 3);
console.log(arr3);

// Task 15 — includes()

let values = [10, 20, 30, 40];

console.log(values.includes(20));
console.log(values.includes(100));

// Task 16 — indexOf()

let arr4 = [1, 2, 3, 4, 3, 2];

console.log(arr4.indexOf(3));
console.log(arr4.indexOf(2));

// Task 17 — lastIndexOf()

let arr5 = [1, 2, 3, 4, 3, 2];
console.log(arr5.lastIndexOf(3));
console.log(arr5.lastIndexOf(2));

// Task 18 — sort()

let nums = [100, 2, 55, 1, 9];
console.log(nums.sort());

console.log(nums.sort((a, b) => a - b));

// Task 19 — reverse()

let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);

// Task 20 — Student Management

let students3 = ["Vamsi", "penchal", "Deepu"];
let push1 = students3.push("Prasanna");
let remove = students3.splice(1, 1);
let replace = (students3[1] = "Swathi");

students3.reverse();
console.log(students3);

// Task 21 — Shopping Cart

let cart = ["Shoes", "Watch", "Phone"];

cart.push("Laptop");
cart.splice(1, 1);
console.log(cart.includes("Phone"));

console.log("Total Length Of the cart :", cart.length);

console.log(cart);

// Task 22 — Employee Database

let employee = {
  name: "Naveen",
  role: "Web Developer",
  salary: "5LPA",
};

let { name, role, salary } = employee;

let copied_details = { ...employee };

copied_details.salary = "11Lpa";

console.log("original", employee);
console.log("changed", copied_details);

// Task 23 — Custom Function

function company(name, ...skills) {
  console.log("company name :", name);
  console.log("Skills :", skills);
  console.log("Total Skill count :", skills.length);
}

company(
  "Stackly",
  "Java",
  "SpringBoot",
  "microservices",
  "HLD",
  "LLD",
  "javascript",
  "react",
  "tailwindcss",
);

// Task 24 — Array Analyzer

let data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let extract = data1.slice(0, 5);

console.log(extract);

console.log(data1.reverse());
console.log(data1.includes(7));
console.log(data1.indexOf(10));

// Task 25 complete challenge

let users = [
  { name: "Rahul", role: "Developer" },
  { name: "Ajay", role: "Designer" },
  { name: "Kumar", role: "Tester" },
];

users.push({ name: "penchal", role: "developer" });

users.pop();

let newUsers = [
  { name: "Raju", role: "HR" },
  { name: "Sam", role: "DevOps" },
];

let merge1 = [...users, ...newUsers];

merge1.forEach((user) => {
  console.log(user.name);
});

let reverse_final = merge1.reverse();
console.log(reverse_final);
