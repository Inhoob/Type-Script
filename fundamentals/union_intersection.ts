//union => Or 연산자로 타입 정의
function getAge(age: number | string) {
  //any에 비해 갖는 메리트는 숫자인걸 알기 때문에 숫자관련 API 자동완성
  if (typeof age === "number") {
    age.toFixed();
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}

//intersection => &
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
type Capt = Person & Developer;

//union과 intersection은 or과 and의 관계가 아니다.
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  // someone.age; // X 타입 오류
  // someone.skill; // X 타입 오류
}
