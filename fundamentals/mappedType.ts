//js에서 map API를 사용하는 것 처럼 사용할 수 있다.

//mapped type 기본문법
// { [ P in K ] : T }
// { [ P in K ] ? : T }
// { readonly [ P in K ] : T }
// { readonly [ P in K ] ? : T }

type Heroes = "Hulk" | "Thor" | "Capt";

type HeroProfiles = { [K in Heroes]: number }; // 여기서 K in Heroes는 마치 for in 문법과 비슷하게 동작한다. 3개의 문자열은 순회해서 number를 값으로 가지는 객체의 키로 정의
const heroInfo: HeroProfiles = {
  Hulk: 54,
  Thor: 1000,
  Capt: 33,
};

//mappedType 실용예제
type Subset<T> = {
  //type보단 interface를 쓰자면서?
  [K in keyof T]?: T[K];
}; //키와 값이 있는 객체를 정의하는 타입을 받아 그 객체의 부분집합을 만족하는 타입으로 변환해주는 문법

interface Person {
  age: number;
  name: string;
}

const ageOnly: Subset<Person> = { age: 23 };
const empty: Subset<Person> = {};
const ironMan: Subset<Person> = { name: "Tony", age: 33 };

//mappedType 실용예제2

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

function fetchUserProfile(): UserProfile {
  // ...
  username: "박인후";
}
