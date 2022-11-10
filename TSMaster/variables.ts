/**Annotation */
let movieTitle: string = "Amadeus";
console.log(movieTitle.toUpperCase());

let catLives: number = 9;

//Type Inference
let tv = "Samsung"; //type선언을 안해도 string이라고 추런

//the any type
let thing: any = "hello";
thing = 1;
thing = false;

//annotation이 필요한 경우 => 선언만 해놓으면 암시적인 any로 타입추론을 하기 때문에
//타입을 지정해주는것이 좋다.
const moview = ["arrival", "the thing", "aliens"];
let foundMovie;
