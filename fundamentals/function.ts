function sum(a: number, b: number): number {
  return a + b;
}
//return 타입을 안 정해줄거면 void라도 쓰자
//JS에서는 인자를 다 넘기지 않아도 되지만 타입스크립트에선 정의된 매개변수만큼 전달인자를 넘겨줘야 한다

//REST 문법 적용
function sum2(a: number, ...nums: number[]): number {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}

//this
interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: "#app",
  count: 10,
  init: function (this: Vue) {
    return () => {
      return this.count;
    };
  },
};

let getCount = vm.init();
let count = getCount();
console.log(count);

//callback 함수에서 this

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

// class Handler {
//   info: string;
//   onClick(this: void, e: Event) {
//     // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
//     console.log("clicked!");
//   }
// }
// let handler = new Handler();
// uiElement.addClickListener(handler.onClick);
