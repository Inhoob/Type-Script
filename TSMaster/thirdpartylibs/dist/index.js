"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios")); //axios는 index.d.ts파일이 있다.
var lodash_1 = __importDefault(require("lodash")); //lodash에는 type이나 typing filed가 없다(github package.json) .d.ts도없음
//그러므로 이걸 쓰려면 npm install --save-dev @types/lodash 를 추가로 설치해줘야함
//devDependency를 주는 이유는 production단계에서는 딱히 type이 필요없기때문이다.
lodash_1.default.partition;
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    console.log("WOO!!!");
    printUser(res.data);
})
    .catch(function (e) {
    console.log("ERROR!", e);
});
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
    console.log("WOO!!!");
    res.data.forEach(printUser);
})
    .catch(function (e) {
    console.log("ERROR!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
