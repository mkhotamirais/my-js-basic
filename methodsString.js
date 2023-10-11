console.log("1. String Methods1");

const str = "I love Javascript";
console.log(
  str.length,
  str.includes("lov"),
  str.startsWith("i"),
  str.endsWith("script"),
  str.indexOf("a"),
  str[0],
  str[str.length - 1]
);

console.log("2. String method 2");
const potong2 = str.slice(str.indexOf("I"), str.indexOf("Java"));
const strUppser = str.toUpperCase();
const strLower = str.toLowerCase();
console.log(
  str.slice(5),
  str.slice(2, 5),
  str.slice(str.indexOf("I"), str.indexOf("love") + 4),
  str.toUpperCase(),
  str.toLowerCase(),
  str.replace("I", "She"),
  str.replaceAll("a", "i").replaceAll(" ", "_")
);

console.log("3. Test (sort yang ada ahmad nya)");
const names = [
  "ahmad dan abdul",
  "ahmad dan siti",
  "siti dan abdul",
  "ayu dan siti",
  "ahmad dan ayu",
];
console.log("Jawaban");
const namesAhmad = [];
for (n of names) {
  if (n.includes("ahmad")) {
    namesAhmad.push(n);
    console.log(n);
  }
}
console.log(namesAhmad);

console.log("4. Test (Change names to lowercase)");
const nama = ["aHmaD", "AbdUL", "SIti", "AyU"];
console.log("Jawaban");
const namaCapitalize = [];
for (n of nama) {
  namaCapitalize.push(
    n.toLowerCase()[0].toUpperCase() + n.toLowerCase().slice(1)
  );
}
console.log(namaCapitalize);

console.log("5. test (generate string from old one)");
const stations = [
  "JAK12345;Jakarta Bunderan HI",
  "BAN1234678;Bandung Welcome",
  "JOG:12356987;Jogja Karta",
];
for (s of stations) {
  console.log(s.slice(0, 3) + ": " + s.slice(s.indexOf(";") + 1));
}
