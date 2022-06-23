// HW_1* by @art057
// Задания с разным количеством звездочек:)

// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке



// Решение 1* 

const age_2 = 18
const age_3 = 60

const checkAge1 = function(age) {
         console.log("Your age is", age);
         if (age < age_2) {
            console.log("You don’t have access cause your age is " + (age) + " It’s less then " + (age_2));
         } else if (age >= age_2 && age < age_3) {
            console.log("Welcome !");
         } else if (age > age_3) {
            console.log("Keep calm and look Culture Channel!");
         } else {
            console.log("Technical work!");
         }
}
console.log("РЕЗУЛЬТАТ ЗАДАНИЯ №1*")

checkAge1(17);
checkAge1(18);
checkAge1(61)

// Решение 2*

const checkAge2 = function(age) {
         if (typeof(age) === 'number' && age < age_2) {
            console.log("Your age is", age);
            console.log("You don’t have access cause your age is " + (age) + " It’s less then " + (age_2));
         } else if (typeof(age) === 'number' && age >= age_2 && age < age_3) {
            console.log("Your age is", age);
            console.log("Welcome !");
         } else if (typeof(age) === 'number' && age > age_3) {
            console.log("Your age is", age);
            console.log("Keep calm and look Culture Channel!");
         } else if (typeof(age) === 'number') {
            console.log("Your age is", age);
            console.log("Technical work!");
         } else (
            console.log("Error : Please enter a number!")
         )
}
console.log("РЕЗУЛЬТАТ ЗАДАНИЯ №2*")

// Check string
checkAge2("r");

// Check boolean
checkAge2(true);

// Check null
checkAge2(null);

checkAge2(17);
checkAge2(18);
checkAge2(61)



// Решение 3**

const checkAge3 = function(age) {
age_1 = Number(age)
if (!isNaN(age)) {
    if (age != 0 && age < age_2) {
       console.log("Your age is", age);
       console.log("You don’t have access cause your age is " + (age) + " It’s less then " + (age_2));
    } else if (age != 0 && age >= age_2 && age < age_3) {
       console.log("Your age is", age);
       console.log("Welcome !");
    } else if (age != 0 && age > age_3) {
       console.log("Your age is", age);
       console.log("Keep calm and look Culture Channel!");
    } else if (age > 0) {
       console.log("Your age is", age);
       console.log("Technical work!");
    } else if (age == 0) {
        console.log("Age cannot be 0. Please enter a number!")
    } 
}
else {
    console.log("Error : Please enter a number!")
}
}

console.log("РЕЗУЛЬТАТ ЗАДАНИЯ №3**")


// Check string
checkAge3("r");
checkAge3('33')

// Check boolean
checkAge3(Boolean);

// Check null & 0
checkAge3(null)
checkAge3(0);

checkAge3(17);
checkAge3(18);
checkAge3(61);