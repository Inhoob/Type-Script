const nums: Array<number> = [];
const colors: Array<string> = [];
//querySelector는 generic을 받는다!!
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.log(inputEl.value); //여기서 inputEl은 빨간줄이 뜨는데 위에 inputEl에 느낌표를 붙이던지
//input으로부터 output을 예상할 수 있는 아주 general한 방식이 generic이다.

//만약 item을 받아 그 item의 타입 그대로를 출력해야된다면?
function numberIdentity(item: number): number {
  //이런 모양의 함수를 굉장히 많이 만들어야 한다.
  return item;
}

//아래와 같은 모양은 좋지않다. number로 들어가고 string으로 나와도 전혀 이상하지 않다.
// function identity(item: any): any {
//   return item;
// }

function identity<Type>(item: Type): Type {
  return item;
}

identity<number>(7);
// identity<Cat>({}) 이런식이라면 TypeScript의 반환값이 Cat타입이어야 한다는 뜻이다.
//generic 자리에 T 또는 genericType을 사용하는 경우가 많다.

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}
console.log(getRandomElement<number>([4, 5, 6, 7])); //여기서 number를 사실 쓸 필요가 없다. 추론을 하기 때문

//getElementById나 quersySelector같은 경우에는 type parameter를 넣어줘야한다. 객체나 DOM요소의 type이 뭔지 모르기 때문
//또한 TSX 에서 작업할 때에는 Generic뒤에 ,(comma)를 찍어줘야한다.

function merge<T extends object, U extends object>(object1: T, obejct2: U) {
  // 이렇게 해 두면 return type은 T&U로 추론하기 때문에 따로 적지 않아도 된다.
  //generic은 순서대로 T,U,V를 사용한다. for loop의 i,j,k처럼
  return {
    ...object1,
    ...obejct2,
  };
}

const combo = merge({ name: "inhoo" }, { pets: ["pug", "ruphy"] });
//만약 객체가 아닌걸 합치면??
// console.log(merge({ name: "inhoo" }, 9));
//이렇게하면 ...number는 빈객체이므로 그대로 나옴.
//둘다 객체로 하고싶다면?

interface Lengthy {
  length: number;
}
// function printDoubleLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }
function printDoubleLength(thing: Lengthy): number {
  return thing.length * 2;
}

//generic 활용
function makeEmptyArray<T = number>(): T[] {
  //generic을 정의하지 않으면 number로 생성된다는 뜻
  return [];
}
const strings = makeEmptyArray<string>();
// strings.push(3) 3이 push가 안됨.

//generic class 만들기(제너릭 클래스 예시)
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}
// 이런 건 만들기 싫으니
// class VideoPlaylist {
//   public videos: Video[] = [];
// }

// class SongPlaylist {
//   public songs: Song[] = [];
// }

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}
const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
