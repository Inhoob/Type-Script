interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}

const thomas: Person = { first: "Thomas", last: "Hardy", nickname: "Tom", id: 21837, sayHi: () => "Hello" };
thomas.first = "kasjdh";
console.log(thomas);
//thomas.id = 2395 은 불가능 readonly라서

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);
console.log(shoes);

//interface는 property를 추가해서 사용할 수 있다.(대치하거나 덮어씌운게 아니라 순수하게 추가)
// 그러면 그 후에 만들 객체에서도 모든 요소를 다 가지고있어야한다.
interface Dog {
  name: string;
  age: number;
}
interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Shephered",
  bark() {
    return "WOOF WOOF!";
  },
};

//service Dog이라는 또 다른 인터페이스가 필요하다고 치자. ServiceDog은 extends 하면 됨.
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark";
  },
  job: "guide dog",
};

//interface 다중상속
interface Human {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  level: "junior",
  languages: ["kr", "eng"],
  email: "hi",
};
