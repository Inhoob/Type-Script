//Partial => 특정 타입의 부분집합을 만족하는 타입을 정의할 수 있다.
interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "test@abc.com" }; // 가능
const all: MayHaveEmail = { email: "capt@hero.com", address: "Pangyo" }; // 가능

//Pick => 특정 타입에서 몇개의 속성만을 선택해서 가져올 수 있다.
interface Hero {
  name: string;
  skill: string;
}

const human: Pick<Hero, "name"> = {
  name: "스킬이 없는 사람",
};

type HasThen<T> = Pick<Promise<T>, "then" | "catch">;
let hasThen: HasThen<number> = Promise.resolve(4);
console.log(hasThen.then); //[Function: then]
console.log(hasThen.catch); //[Function: catch]
console.log(typeof hasThen); // Promise {4}

//Omit => 특정 타입에서 지정된 속성만 제거한 타입을 정의해준다.
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, "address"> = {
  name: "재택근무",
  phone: 12342223333,
  company: "내 방",
};
const chingtao: Omit<AddressBook, "address" | "company"> = {
  name: "중국집",
  phone: 44455557777,
};
