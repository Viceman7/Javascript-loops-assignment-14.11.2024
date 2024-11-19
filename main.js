/*
Task 1 - Finn det laveste nummeret i et array
Skriv en funksjon findMin som tar i mot en array med nummer og returnerer det laveste nummeret. Lag denne uten bruk av Math
*/

function findMin(numbers) {
  if (numbers.length === 0) return undefined;
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

console.log(findMin([1, 6, 2, 8, -1]));
console.log(findMin([10, 23, 50, -77]));
console.log(findMin([90, -44, 5000, -143]));

/*
Task 2 - Tell vokaler i en string
Skriv en funksjon countVowels som tar i mot en string og returnerer antall vokaler i stringen
*/

function countVowels(str) {
  const vowels = "Hei på deg";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hei på deg"));

//Task 3 - Summer alle numrene i en range
//Skriv en funksjon sumRange som tar i mot to nummer, start og slutt og returnerer summen av alle numrene mellom start og slutt (inklusivt)

function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5)); // skal returnere 15
// Prøv med flere test cases!
console.log(sumRange(3, 7));
console.log(sumRange(5, 1));

//Task 4 -Tell hvor mange ganger en bokstav kommer opp i en string
//Skriv en funksjon countOccurences som tar i mot en string og en bokstav, og returner antall ganger som bokstaven er i stringen

function countOccurences(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}
console.log(countOccurences("Hello World!", "l")); // skal returnere 3
console.log(countOccurences("Hello World!", "æ")); // skal returnere 0
// Prøv med flere test cases!
console.log(countOccurences("Hello World!", "Hi!"));

//Task 5 - Fjern duplicates fra en array
//Skriv en funksjon removeDuplicates som tar i mot en array, og returner et nytt array med duplikatene fjernet

//Tips: Bruk et array unique, og sjekk !unique.includes(verdi)

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // skal returnere: [1, 2, 3, 4, 5]
console.log(
  removeDuplicates(["Harald", "Håkon", "Harald", "Bjarne", "Grethe"])
); // skal returnere: ["Harald", "Håkon", "Bjarne", "Grethe"]
// Prøv med flere test cases!
