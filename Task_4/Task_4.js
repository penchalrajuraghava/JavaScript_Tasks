// JavaScript Task-4:

// Task-1 Smart Attendance Checker

function Attendance_Checker(Attendance, fees) {
  if (Attendance >= 75 && fees == true) {
    console.log("Allowed for exam");
  } else {
    console.log("Not allowed");
  }
}

Attendance_Checker(50, true);
Attendance_Checker(80, true);

// Task-2 : Mobile Password Strength Checker

function Password_Checker(Password) {
  let hasUpperCase = false;
  let hasNumber = false;

  for (let char of Password) {
    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  if (Password.length >= 8 && hasUpperCase && hasNumber) {
    return "Strong Password";
  } else {
    return "Weak password";
  }
}

console.log(Password_Checker("Abcd1234"));

// Task-3 :Find Second Largest Number

let arr = [10, 50, 80, 20, 90, 70];

let largest = 0;
let secondlargest = 0;
for (let num of arr) {
  if (num > largest) {
    secondlargest = largest;
    largest = num;
  } else if (num > secondlargest && num !== largest) {
    secondlargest = num;
  }
}

console.log("second Largest :" + secondlargest);

// Task-4 Bus Seat Booking System

let seats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

function seat_Booking(seatNumber) {
  if (seats[seatNumber - 1] === true) {
    console.log("Seat Already Booked");
  } else {
    seats[seatNumber - 1] = true;
    console.log("Seat Boooked Succesfully");
  }
}

seat_Booking(2);
seat_Booking(2);
seat_Booking(3);

//Task-5 Atm Cash Withdraw Logic

function Withdraw(balance, amount) {
  if (amount > balance) {
    return "Insufficient Funds";
  } else if (balance - amount < 1000) {
    return "Minimum Balance Should Maintain 1000";
  } else {
    return "Withdraw Successfully";
  }
}

console.log(Withdraw(10000, 9000));
console.log(Withdraw(10000, 10500));

// Task-6 :Product Search Engines

let phones = ["Iphone", "samsung", "realme", "oppo"];

let search = "oppo";

let Found = false;
for (let phone of phones) {
  if (phone.toLowerCase() === search.toLowerCase()) {
    Found = true;
    break;
  }
}
if (Found) {
  console.log("Product Found");
} else {
  console.log("Product Not found");
}

// Task-7: Voting Eligibility System

function Voting_Eligibility(age, voterId, CitizenShip) {
  if (age >= 18) {
    if (voterId && CitizenShip === "Indian") {
      return "Eligible to Vote";
    } else {
      return "Not eligible to Vote";
    }
  } else {
    return "Not eligible to Vote";
  }
}

console.log(Voting_Eligibility(21, true, "Indian"));
console.log(Voting_Eligibility(17, true, "Indian"));

//Task-8 Online Food Order Bill

function Food_calculate(foodprice, gst, Deleverycharge, Discount) {
  let totalgst = (foodprice * gst) / 100;

  let total_amount = foodprice + totalgst + Deleverycharge - Discount;

  return "Total Bill: ₹" + total_amount;
}

console.log(Food_calculate(400, 10, 30, 0));

// Task-9 : Reverse a String

let name = "Ab de villiers";

let reverse = "";

for (i = name.length - 1; i >= 0; i--) {
  reverse += name[i];
}

console.log(`Reverse Name Was : ${reverse}`);

// Task-10 Instagram Likes Count

let isliked = false;
let likes = 0;

function like() {
  isliked = true;

  if (isliked) {
    likes++;
  } else {
    likes--;
  }

  let Instagram_likes = isliked ? "Liked ❤️" : "Like 🤍";
  console.log(Instagram_likes);
  console.log("Total Likes:" + likes);
}

like();
like();
like();
like();
