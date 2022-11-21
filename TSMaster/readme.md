# TypeScript Compiling

```
//tsconfig 파일 만들기
tsc --init

// typescript compiling(index.js 생성)
// 이 명령어를 사용하면 index.ts에 변경이 생기면 또 적용한다. 화면전환 없이 같은 창에서
tsc index.ts

//감시모드
tsc -w index.ts

//한꺼번에 컴파일
tsc
```

### tsconfig.js

1. files : [...] 을 통해 tsc 명령을 했을 때 내가 원하는 파일만 컴파일 할 수 있음.

2. include,exclude : files 옵션이 있으면 이것은 발동하지 않음. exclude의 기본값은 node_modules 이기 때문에 exclude를
   설정해 준다면 node_modules도 반드시 추가해줄 것

3. outDir : dist같은 파일에 js파일들을 모아주기 위해 사용. tsconfig파일에서 ctrl+f로 찾아서 바꿔주면 된다.

4. target : es 몇 버전으로 compiling 할지 설정

5. strict : 기본은 true 값이다.

6. strictNullChecks : undefined, null 은 특정한 타입을 지니고 만약 구체적인 값을 넣어야하는 곳에 사용하면 오류가 발생한다.(켜놓고 사용하는 것을 추천)

7. moduels : 기본으로 'commonjs'로 되어있는데 파일 공유 및 가져오기, 내보내기 할 때 사용. 모듈을 처리하는 방법을 바꿀 수 있다.

8. allowJs : TypeScript 프로그램 일부에 JavaScript 파일을 사용할 수 있게 된다.

9. checkJs : JS 파일에 문제가 있으면 문제가 어디있는지 알려주는 기능

10. sourceMap : 소스맵 만들지 여부

11. noEmit : js파일을 만들지 않게 한다.

12. noEmitOnError : 컴파일중에 오류가 생기면 TypeScript가 새로운 파일을 만들지 않게 하는 옵션

13. lib : 타겟 런타임 환경을 설명하는 번들 라이브러리 선언 파일을 지정할 수 있다. 기본값은 DOM 이다

# TODO APP with TypeScript

```
tsc --init
mkdir src dist
touch src/index.ts
```

tsconfig.json 들어가서 outDir 를 dist로 바꾸고 include:['src']로 설정
index.html 생성

```
npm init -y //package.json 생성
npm install  lite-server
```

> non-null에 관하여

```
const btn = document.getElementById('btn');
btn.addEventListener('click')
```

위와 같은 코드는 동작하지 않는다. 왜냐하면 type이 HTMLElement | null 이기 때문이다. null이 될 수 있는 것에는 addEventListener가 없다.
해결책은 첫째는 아래의 식이다. 이러면 만약 btn element의 id를 다른걸로 변경해서 btn 식별자가 null이 될 경우 동작을 안한다. 그런데 오류메시지가 나오지 않는다.

```
 btn?.addEventListener('click')
```

둬 번째는 non-null 연산자를 활용하는거다. 아래의 식처럼 뒤에 느낌표(!)를 붙이면 null이 되지 않는 것을 보장한다. 하지만 불확힐한 런타임에서 작업할 때는 사용하지 말 것.

```
const btn = document.getElementById("btn")!
```

> Type Assertion(타입 단언)

```javascript
let mystery : unknown = "Hello World!!!";
// const numChars = mystery.length 로 할 경우 error 발생
const numChars = (mystery as string).length
```

## Generics

Generics는 여러 타입을 사용하는 재사용 함수와 클래스를 정의하게 해주는 특수구문

## Modules

파일간 코드 공유는 원래 JavaScript에서는 불가능한 일이였지만 지금은 CommonJS나 ES Modules를 통해 가능해졌다.

## Webpack 번들

SourceMap : browser의 source 탭에서 번들링된 파일을 역번들링해서 원본을 확인할 수 있음
자세한건 webpack_ts_final 폴더 참고

## React에 TypeScript 적용

[타입스크립트 cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
