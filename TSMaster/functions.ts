/**parameters를 전달하지 않을 때 default값 설정하는법 => annotation 뒤에 써 줄것 */
function greet(person: string = "stranger") {
  return `Hi there, ${person}!`;
}
//return 값 annotation
function square(num: number): number {
  return num * num;
}

//이 경우 rando에 마우스를 대면 num|string이라고 나옴
function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

//map속의 익명함수의 전달인자 color에 마우스를 대면 context를 읽어내 string이라고 이미 추론하고 있다.
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

//아무것도 반환하지 않는 함수 => void로 annotation
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

//Never 타입 : 아무것도 반환해선 안된다. void는 아무것도 반환하지 않는경우 undefined를 반환하는걸로 처리됨
//Never는 exception을 반환하거나 아무것도 반환할 일이 없거나 무한루프에서 씀. 아무것도 반환할 기회가 없어야한다.

function makeERror(msg: string): never {
  throw new Error(msg);
}

function infinite(): never {
  while (true) {
    console.log("bingbing");
  }
}
