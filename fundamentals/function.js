function sum(a, b) {
    return a + b;
}
//return 타입을 안 정해줄거면 void라도 쓰자
//JS에서는 인자를 다 넘기지 않아도 되지만 타입스크립트에선 정의된 매개변수만큼 전달인자를 넘겨줘야 한다
//REST 문법 적용
function sum2(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var totalOfNums = 0;
    for (var key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}
console.log(sum2(10, 50));
