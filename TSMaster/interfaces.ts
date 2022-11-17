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

//interface와 type의 차이
/**
 * interface는 객체만 묘사할 수 있다. 그러므로 객체 형태를 묘사하는 경우가 아니라면 type 키워드를 사용해야 한다.
 * type은 같은 Person이라는 타입을 다시 열어서 사용할 수 없다. 하지만 interface는 같은 Person으로 추가할 수도, 아니면 extend로 확장해서 쓸 수도 있다. type은 확장하려면 & 기호를 사용할 수 있긴 함.
 */
