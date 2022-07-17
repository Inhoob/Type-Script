enum Direction {
  Up, //여기에 값을 안주면 0부터 인덱스가 되고, 값을 주면 거기서부터 1씩증가
  Down,
  Left,
  Right,
}

//숫자형 enum
enum esponse {
  No = 0,
  Yes = 1,
}

//문자형 enum
enum Direct {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

//복합 enum
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

//런타임에서의 enum => 객체로 동작
enum E {
  X,
  Y,
  Z,
}

function getX(obj: { X: number }) {
  return obj.X;
}
getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작

//컴파일 시점에서의 enum => 객체처럼 조회할 수 없다. keyof typeof를 사용할 것
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

// 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is: ", key);
    console.log("Log level value is: ", num);
    console.log("Log level message is: ", message);
  }
}

// printImportant("WARN", "This is a message");
// console.log(LogLevel["WARN"]);

//리버스 매핑. 숫자형에서만 가능하다
enum Enum {
  A,
  B,
}
let a = Enum.A;
let b = Enum.B;
console.log(b);
let keyA = Enum[a];
