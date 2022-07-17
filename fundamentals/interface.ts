// let person = { name: 'Capt', age: 28 };

// function logAge(obj: { age: number }) {
//   console.log(obj.age); // 28
// }
// logAge(person); // 28

//위의 내용을 interface를 이용해서 더 명시적으로 바꿔줄 수 있다.
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: "Capt", age: 28 };
logAge(person);

//읽기전용 속성
interface CraftBeer {
  readonly brand: string;
  [propName: string]: any; //정의하지 않은 속성을 활용하고 싶을 때 이걸 사용. 이 내용이 없으면 앞에 createdAt에 에러가 발생하게 된다.
}
let myBeer: CraftBeer = {
  brand: "belgian",
  createdAt: "yesterday",
}; //여기서 myBeer.brand 값을 바꾸려고 하면 에러발생
//console.log(myBeer.createdAt); 을 할 경우
//읽기전용 배열
let readonlyArr: ReadonlyArray<number> = [1, 2, 3]; //arr.splice,push 등으로 배열을 바꾸려고 하면 에러발생

//함수 타입을 정의하는 인터페이스
interface login {
  (username: string, password: string): boolean;
}
let loginUser: login;
loginUser = function (id: string, pw: string) {
  console.log("로그인 했습니다");
  return true;
};
