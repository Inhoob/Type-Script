## TypeScript Compiling

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

## tsconfig.js

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
