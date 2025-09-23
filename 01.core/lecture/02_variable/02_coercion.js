/**
 * 📌 암묵적 타입 변환 vs 명시적 타입 변환
 * 1. 암묵적 타입 변환 (implicit-coercion)
 *   1) 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것
 *   2) 암묵적 타입 변환은 코드에서 드러나지 않으므로 타입 변환된 결과를 예측할 수 있어야 오류 방지 가능
 * 2. 명시적 타입 변환 (explicit-coercion)
 *   1) 개발자의 의도에 따라 값의 타입을 변환시키는 것
 *   2) 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를 사용하는 방법,
 *      빌트인 메소드를 사용하는 방법이 있음
 */

// 1. 문자열차입(string)으로 변환

//1)문자열 연결 연산자(+) : 암묵적 변환
console.log(10 + "20"); // '10' + '20' => '1020'
console.log(true + "Hi!!"); // 'true' + 'Hi!!' => trueHi!!

// 2) 템플릿 리터럴의 표현식 삽입 : 암묵적 변환
console.log(`결과: ${10 + 20}`); // '결과: 30'

// 3) string 생성자 함수 이용 : 명시적 변환
// console.log(10.legth)
console.log(String(10).length); // 10 => '10'
console.log(String(true)); // true => 'true'

// 4) . toString() 메소드 이용 : 명시적 변환
console.log((10).toString()); // 10 => '10'

// 2. 숫자 타입(number)으로 변환

// 1) 산술연산자(-*/)에 의한 변환 : 암묵적 변환
//    산술연산자에서의 피연산자는 모두 숫자여야됨
//    숫자가 아닌 피연산자가 숫자타입으로 암묵적으로 변환
console.log(10 - "5"); // 10 - 5 뺼샘
console.log(10 * "5"); // 10 * 5 곱샘
console.log(10 / "5"); // 10 / 5 나누기
console.log(10 % "5"); // 10 % 5 나눴을떄 나머지 값

console.log(10 % "JavaScript"); // NaN : 산술 연산 불가(not-a-number)

// 2) 비교연산자에 의한 변환
console.log(10 > "5"); // 10 > 5
console.log("a" < "b");

// 3) Numder 생성자 함수 이용
console.log(Number("10")); // 10
console.log(Number("10.01")); // 10.01
console.log(Number("JavaScript")); //NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 2

// 4) parseInt(), parseFloat() 함수 이용
console.log(parseInt("10"));
console.log(parseFloat("10"));

console.log(parseInt("10.01")); // 10
console.log(parseFloat("10.01")); // 10.01

console.log(parseInt("10000.1원")); // 10000
console.log(parseFloat("10000.1원")); // 10000.1
console.log(Number("10000.1원")); // NaN

// 3. 논리 타입(boolean)으로 변환

// 1) 암묵적 변환
/*
  if(조건식=>참/거짓) {
  참일 경우에만 실행할 구문
  }
  */
if (true) console.log("if(true)");
if (false) console.log("if(false)");

/*
  자바스크립느엔진에서는 boolean 타입(true/false)이 아닌 값들을
  Truthy값(참으로 평가되는 값), false값(거짓으로 편가된 값)으로 구분함
  Truthy값은 암묵적으로 true로 변환 / false값은 암묵적으로 false로 변환
*/
if (undefined) console.log("lf(undefined)"); // false
if (null) console.log("if(null)"); // flase
if (10) console.log("if(10)"); // true
if (0) console.log("if(0)"); // false
if (NaN) console.log("if(NaN)"); // false
if ("안녕") console.log("if(안녕)"); // true
if ("") console.log("if()"); //false

// 정리. false, undefinde, null, 0, NaN, '' 은 false값
//       그 외는 다 Truthy값
