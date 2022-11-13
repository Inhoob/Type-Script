// Basic Union Type:
let age: number | string = 21;
age = 23;
age = "24";

type Loc = {
  lat: number;
  long: number;
};

// Union type with type aliases
let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// Function parameter union type:
function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
// 타입 좁히기
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// const nums: number[] = [1,2,3,4]
// const stuff: any[] = [1,2,3,4, true, "asdas", {}]

// 유니온 타입을 배열에 활용
// (number|string)은 배열내에 number와 string이 혼합될 수 있지만
// number[]|string[] 은 배열내 모든 요소가 number이거나 string이어야 한다.
// const stuff: (number | string)[] = [1,2,3, "das"]
// const stuff: number[] | string[] = ["asd", "asd", 1]

// Union Type With Arrays
const coords: (Point | Loc)[] = [];
coords.push({ x: 213, y: 43 });
coords.push({ lat: 321.213, long: 23.314 });

// Literal Types
let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Sunday";
