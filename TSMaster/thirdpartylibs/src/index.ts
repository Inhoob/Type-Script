import axios from "axios"; //axios는 index.d.ts파일이 있다.
import _ from "lodash"; //lodash에는 type이나 typing filed가 없다(github package.json) .d.ts도없음
//그러므로 이걸 쓰려면 npm install --save-dev @types/lodash 를 추가로 설치해줘야함
//devDependency를 주는 이유는 production단계에서는 딱히 type이 필요없기때문이다.
_.partition;
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("WOO!!!");
    printUser(res.data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("WOO!!!");
    res.data.forEach(printUser);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
