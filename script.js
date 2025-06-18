function trailingZeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

const input = prompt("Enter a non-negative integer:");
const num = parseInt(input);

if (!isNaN(num) && num >= 0) {
  const result = trailingZeros(num);
  alert("Number of trailing zeros in " + num + "! is: " + result);
} else {
  alert("Invalid input. Please enter a non-negative integer.");
}
