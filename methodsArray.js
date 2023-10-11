console.log("1. Materi Array 1");
const arr = [
  "1",
  "2",
  "3",
  ["3.1", "3.2"],
  "4",
  ["4.1", "4.2", ["4.2.1", "4.2.2"]],
];
console.log(arr.length, arr[0], arr[3][0], arr[5][2][1]);

console.log("2. Materi Array 2");
const arr2 = [];
arr2.push("ahmad");
console.log(arr2);
arr2.push("abdul", "siti", "ayu");
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.unshift("ayu");
console.log(arr2);
arr2.shift();
console.log(arr2);

console.log("3. Materi Array 3");
const arr3 = [];
arr3.push("ahmad", "abdul", "ayu", "budi", "brendan eich");
console.log(arr3);
const arr3Splice = arr3.splice(0, 1);
console.log(arr3Splice);
console.log(arr3);
for (a3 of arr3) {
  console.log(a3);
}

console.log("4. Split and Join");
const splitData = "ahmad, abdul, siti";
const splitResult = splitData.split(", ");
const joinResult = splitResult.join(", ");
const joinToString = splitResult.toString();
console.log(splitResult);
console.log(joinResult);
console.log(joinToString);

console.log("5. Test");
let products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];
let result = 0;
for (p of products) {
  //   p.split(p.indexOf(":"));
  const price = p.slice(p.indexOf(":") + 1);
  const item = p.slice(0, p.indexOf(":"));
  result += Number(price);
}
console.log(result.toFixed(2));
