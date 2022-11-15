//tuple는 고정된 길이와 특정 타입을 순서대로 입력해야 하는 배열이다
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0]='200' 이라는건 불가능함.
// goodRes.push(123);
// goodRes.pop();
// goodRes.pop();
// goodRes.pop(); 같은 경우는 동작하는데 이것이 tuple의 한계다.

//다행히 tuple을 자주 쓸 일은 없다.
//원래는 HTTPResponse에는 사용하지 않는다. tuple보다는 객체를 사용할 것
//하지만 RGB 같이 number를 여러개 쓸 때에 사용하면 좋다.

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

//enums => 반복적으로 사용하는 집합이 있을 때 사용하면 좋다.
//예를들어 UP,DOWN,LEFT,RIGHT
// PENDING SHIPPED DELIVERED

// const PENDING = 0
// const SHIPPED = 1
// const DELIVERED = 2
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
//enum을 생성하고 지정하지 않으면 0으로 시작하는 숫자 값을 할당하게 된다.
//enum에 아무 숫자도 지정하지 않으면 0에서 1씩 증가하는 숫자를 가진다.
const myStatus = OrderStatus.DELIVERED;

function isDelivered(stats: OrderStatus) {
  return stats == OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
} //전부다 문자열이거나 숫자일 필요는 없다

//enum은 자주 사용하지 않게 될 것 같다.
