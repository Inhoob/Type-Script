"use strict";
// class Player {
//   //readonly는 그냥 읽기전용인곳에 표시만 해주면 된다.(쓰기여부)
//   //public은 누구든 프로퍼티나 메서드에 액세스 가능하다는 의미(가시성)
//   //private은 오직 클래스 안에서만 다룰 수 있음
//   //hash(#)으로도 private을 선언할 수 있는데 private으로 쓰는 게 편할 듯 하다. 왜냐하면 변수명을 변경하지 않기 때문
//   //private은 Typescript에서 컴파일 전에 실행되고 #은 JavaScript의 런타임에서 실행된다
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod() {
//     console.log("SECRET METHOD!");
//   }
// }
/**이것을 단축구문이라고 한다!! 아래의 클래스는 위의 클래스와 똑같다 */
class Player {
    // private score: number = 0;
    // 여기서 protected는 외부에서 _score에 액세스하는게 불가능하지만 자식클래스는 제외된다.
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRET METHOD!!!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999;
    }
}
//상속 클래스나 자식클래스 없이 오직 한 클래스에서만 접근할 수 있는걸 만들고싶으면 private을 사용하자.
//public은 모든 클래스에서 접근가능, protected는 상속 클래스에서 접근 가능
const elton = new Player("Elton", "Steele", 100);
elton.score = 99;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
//abstract => TypeScript에만 있는 개념. 자식클래스에서 사용할 메서드를 정의하는데 사용
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
//new Cat(); 인스턴스를 생성할 수 없는 클래스라고 나온다
//abstract 핵심 : getPay를 포함해야한다..!
