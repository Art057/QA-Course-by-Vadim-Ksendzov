// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

// Решение 1

count = 1
let a = 2
while (count <= 10) {
    console.log(Math.pow(a, count));
    count++
}

// Решение 1*

const num = function(degree) {
    count = 1
    while (degree > 0 && count <= 10) {
        console.log(Math.pow(degree, count))
        count++
    } if (degree === 0) {
        console.log("Please enter a number > 0")
    }
}

num(1)

// Решение 2


let smile = ":)"
let x = 0
while (x < 5) {
    console.log(smile);    
    smile = smile + ":)";
    x++;
} 

// Решение 2*

const printSmile = function (stroka, numberofRows) {
    let x = 0
    let string = stroka
    while (x < numberofRows) {
    console.log(string);
    string = string + stroka
    x++;
}
}
printSmile("Hello! ", 4)

// Решение 3**

const getWordStructure = function (word) {
    const consonantsArray = ["q","w","r","t","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
    const vovelsArray = ["e","y","u","i","o","a"];
    let vovels = 0;
    let consonants = 0;
    
    for (let i = 0; i <= word.length; i++) {
        if (consonantsArray.includes(word.toLowerCase()[i])) {
            consonants++;
        }
        if (vovelsArray.includes(word.toLowerCase()[i])) {
            vovels++;  }
    }
    console.log("Word - ", word, " consists of ", vovels, " vovels, and ", consonants, " consonants");
}

// Проверки: 'case', 'Case', 'Check-list'
getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-list");
getWordStructure("Ararat")

// Решение 4**


const isPalindrom = function (word) {
  const wordToCompare1 = word.toLowerCase();
  let wordToCompare2 = "";
  for (let i = wordToCompare1.length; i>0; i--) {
      wordToCompare2 = wordToCompare2 + wordToCompare1[i-1];
  }
  if (wordToCompare1 === wordToCompare2) {
      console.log("Word ", word, " is palindrom");
  } else {
    console.log("Word ", word, " is not palindrom");
  }
}
// Проверки: 'abba', 'Abba'
isPalindrom("abba");
isPalindrom("Abba");
isPalindrom("QwErTyqwe");
isPalindrom("Artur")

