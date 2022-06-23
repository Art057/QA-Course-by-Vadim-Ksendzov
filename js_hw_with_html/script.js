const age_2 = 18
const age_3 = 60

const checkAge = function(...age) {
if (!isNaN(age)) {
    if (age != 0 && age < age_2) {
      alert("Your age is " + age);
      alert("You don’t have access cause your age is " + (age) + " It’s less then " + (age_2));
    } else if (age != 0 && age >= age_2 && age < age_3) {
      alert("Your age is " + age);
      alert("Welcome !");
    } else if (age != 0 && age > age_3) {
      alert("Your age is "+ age);
      alert("Keep calm and look Culture Channel!");
    } else if (age > 0) {
      alert("Your age is " + age);
      alert("Technical work!");
    } else if (age == 0) {
      alert("Age cannot be 0. Please enter a number!")
    } 
}
else {
   alert("Error : Please enter a number!")
}
}

let a = prompt("Enter your age")
checkAge(a)

// // Check string
// checkAge("r");

// // Check boolean
// checkAge(Boolean);

// // Check nulls
// checkAge(null);

// checkAge(17);
// checkAge(18);
// checkAge(61);
// checkAge(60)
// checkAge('33')
// checkAge(0)
// checkAge('')