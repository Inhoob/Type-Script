//재사용률 높은 컴포넌트 사용 시 generic이 유용하다.

//이 코드에 대해 분석해보면 getText는 마치 any 타입을 가진 것처럼 동작한다. text.length를 알아낼 수 없다는 뜻이다.

function getText<T>(text: T): T {
  return text;
}

function getText2<T>(text: Array<T>): Array<T> {
  console.log(text.length);
  return text;
}

//이런 식으로 함수를 호출할 때 타입을 넘겨줄 수 있다.
// console.log(getText<string>("hi"));
// console.log(getText<number>(14));
// console.log(getText<boolean>(true));
console.log(getText2<number>([1, 2, 3]));

//제네릭 타입
function logText<T>(text: T): T {
  return text;
}
//아래의 두 코드는 똑같다
// #1
let str: <T>(text: T) => T = logText;
// #2
let str: { <T>(text: T): T } = logText;
