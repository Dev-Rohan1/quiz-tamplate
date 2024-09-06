// function countDigits(number) {
//   let count = 0;
//   while (number !== 0) {
//     number = Math.floor(number / 10);
//     count++;
//   }
//   return count;
// }

// // Example usage:
// const number = 287152;
// const digitCount = countDigits(number);
// console.log("Number of digits in", number, "is", digitCount);

let number = 12345;

console.log(
  number
    .toString()
    .split()
    .map((x) => parseInt(x.length))
);
