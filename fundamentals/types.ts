let num: number = 10; //Number
let isLoggedIn: boolean = true; //Boolean

let arr: number[] = [1, 2, 3]; //Arr
let arr2: Array<number> = [1, 2, 3]; //Arr인데 제네릭을 이용한

let arr3: [string, number] = ["hi", 10]; //Tuple

enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers.Capt; // let hero: Avengers = Avengers[0]과 같다
//만약 Capt=2 라고 해두면 Avengers[2]~Avengers[4] 까지로 접근이 가능하다.

let str: any = "hi"; //any는 모든 타입을 허용한다. JS에서 TS로 점진적으로 바꿀 때 좋다.

let unuseful: void = undefined; //void는 undefined또는 null만 할당할 수 있다.
function notuse(): void {
  //void를 함수에 쓰면 리턴이 없다.
  console.log("sth");
}

function Neverend(): never {
  //이 함수는 절대 끝까지 도달하지 않는다는 뜻
  while (true) {}
}
