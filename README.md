# types

- Boolean
- Number
- String
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never

# function 에서 지정해줘야 하는 것

- 함수의 파라미터(매개변수) 타입
- 함수의 반환 타입
- 함수의 구조 타입

# 인터페이스

옵션속성: 인터페이스에서 정의된 속성을 다 활용하지 않아도 된다.

# Enum

이넘은 특정 값들의 집합을 의미하는 자료형이다.
런타임에서는 객체처럼 동작하고 컴파일에서는 keyof typeof를 사용할 것.
리버스매핑이 가능하다. key에서 value를 얻을 수 있고 value에서 key를 얻을 수도 있다

# 연산자를 이용한 타입의 정의

Union= Or 연산자로 타입 정의
intersection = 여러 타입을 모두 만족하는 하나의 타입
현재 intersection 활용법 잘 모르겠음

# generic

재사용 가능성이 높은 컴포넌트에 사용

# tsconfig

app.ts를 app.js로 변환
`tsc app.ts`
만약 tsc 명령어로 대상파일을 지정하지 않을 경우 현재 폴더의모든 ts파일로 변환작업을 실행한다.특정 경로에 있는것을 하려면 `tsc -p ./path`

config 관련 속성은 https://joshua1988.github.io/ts/config/tsconfig.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EC%86%8D%EC%84%B1 를 참고하자

# JS에 TS 적용

## 1. 타입스크립트 프로젝트 환경 구성

- 프로젝트 생성 후 NPM 초기화 명령어로 package.json 파일을 생성합니다.
- 프로젝트 폴더에서 npm i typescript -D로 타입스크립트 라이브러리를 설치합니다.
- 타입스크립트 설정 파일 tsconfig.json을 생성하고 기본 값을 추가합니다.

```javascript
{
  "compilerOptions": {
    "allowJs": true,
    "target": "ES5",
    "outDir": "./dist",
    "moduleResolution": "Node",
    "lib": ["ES2015", "DOM", "DOM.Iterable"]
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

- 서비스 코드가 포함된 자바스크립트 파일을 타입스크립트 파일로 변환합니다.
- 타입스크립트 컴파일 명령어 tsc로 타입스크립트 파일을 자바스크립트 파일로 변환합니다.

## 2. 루즈타입에서 테스트코드 돌려보기

## 3. 명시적인 any 선언

- 프로젝트 테스트 코드가 통과하는지 확인합니다
- 타입스크립트 설정 파일에 noImplicitAny: true를 추가합니다.
- 가능한 타입을 적용할 수 있는 모든 곳에 타입을 적용합니다.
- 라이브러리를 쓰는 경우 DefinitelyTyped에서 @types 관련 라이브러리를 찾아 설치합니다.
- 만약, 타입을 정하기 어려운 곳이 있으면 명시적으로라도 any를 선언합니다.
- 테스트 코드가 통과하는지 확인합니다.

## 4. strict 모드 설정

```javascript
{
  "strict": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true,
  "strictBindCallApply": true,
  "strictPropertyInitialization": true,
  "noImplicitThis": true,
  "alwaysStrict": true,
}
```

어지간하면 as를 쓰지말자
