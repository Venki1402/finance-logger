// to automate tsc script.ts -w

const villagerA = "rio";
console.log(villagerA);

const userInputs = document.querySelectorAll("input");
console.log(userInputs);

const villagerB = villagerA;
console.log(villagerB);

const circumference = (radius: number) => {
  return Math.PI * 2 * radius;
};

//Its wrong -
// console.log(circumference("jello"));

console.log(circumference(10));
