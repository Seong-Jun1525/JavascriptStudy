# JavascriptStudy
## JS로 할 수 있는 것들
- 동적인 웹사이트 개발
- 웹 브라우저에서 실행되는 프로그램 개발
- 서버를 구성하고 서버용 프로그램 개발

## JS의 특징
- 모든 웹 브라우저에서 작동
- 웹 브라우저에서 실행결과 즉시 확인 가능
- 다양한 용도의 프로그램 개발 가능
- 다양한 JS 공개 API 사용 가능
- 다양한 라이브러리와 프레임워크 사용 가능(*jQuery, React, Vue 등*)

## 02
- 알림창으로 출력: document.write() 함수
- 웹 브라우저 화면에 출력: document.write()
### JS 소스를 작성할 때 지켜야할 규칙
1. 대소문자를 구별하여 작성
2. 읽기 쉽게 들여 쓰는 습관
3. 세미콜론으로 문장을 구분
4. js소스에 주석을 활용한 메모
5. 식별자는 정해진 규칙을 지켜 작성
6. 예약어는 식별자로 사용할 수 없음

-|-|-|-|-
---|---|---|---|---
arguments|break|case|continue|default
do|else|false|for|function
if|null|return|super|switch
this|true|try|typeof|var
void|while|with

## 03
### 변수
수|설명
---|---
변수(Variable)| 변하는 값
상수(Constant)| 변하지 않는 값
---
**변수의 규칙**
- 의미있는 이름
- 여러단어를 연결한 변수 이름은 낙타모양 혹은 _을 활용해서 만든다(currentYear, birthDay, current_year, birth_day 등)
- 이름의 첫 글자는 문자, _, $로 시작해야 한다
---
**나이 계산 프로그램 만들기**
```html
<button class="btn" onclick="calc()">나이 계산하기</button>
	<div id="result" class="show">(결과 값 표시)</div>
	<script>
		function calc() {
			var currentYear = 2023
			var birthDay
                = prompt("태어난 년도를 입력하세요", "YYYY")
			var age = currentYear - birthDay + 1;
			document.querySelector("#result").innerHTML
				= "당신의 나이는 " + age + "입니다."
		}
	</script>
```
```js
function calc() {
    const currentYear = 2023
    let birthDay = prompt("태어난 년도를 입력하세요", "YYYY")
    let age = currentYear - birthDay + 1;
    document.querySelector("#result").innerHTML
        = "당신의 나이는 " + age + "입니다."
}
```
```
ES6 버전부터는 변수선언을 var대신 let을 사용할 수 있다
let은 블록({}범위)을 벗어나면 사용할 수 없다
const는 상숫값을 선언할 때 사용한다
```
### 자료형
자료형||설명
--|--|--
기본형|number|숫자
||string|문자열. '' 혹은 ""로 묶어 표현
||boolean|참과 거짓 두 가지 값만 가짐
||undefined|자료형을 지정하지 않았을 떄 유형(값을 정의하지 않은 변수)
||null|유효하지 않은 값
복합형|array|배열
||object|함수와 속성이 포함된 유형

**JS 자료형의 특징**
다른 프로그래밍 언어와는 달리 js는 미리 변수의 자료형을 지정하지 않고 변수를 지정하여 값을 할당만 하면 됨.<br/>
이러한 방식을 **_느슨한 자료형 체크_**라고 함.

### 연산자
- typeof: 자료형을 확인하는 연산자

연산자이름|기호|설명
--|--|--
나머지|%|앞의 값을 뒤의 값으로 나눈 나머지 값
증가|++|1만큼 증가
감소|--|1만큼 감소

### 할인 가격 계산 프로그램
```html
<div id="contents">
	<img src="images/sale.png">
	<ul>
		<li>
				<label for="oPrice">원래 가격</label> 
				<input type="text" id="oPrice">원
		</li>
		<li>
			<label for="rate">할인율</label>
			<input type="text" id="rate">%
		</li>
		<li>
				<button onclick="showPrice()">할인 가격 계산하기</button>
		</li>
	</ul>
	<div id="showResult"></div>
</div>
<script>
	function showPrice() {
		var originPrice = document.querySelector('#oPrice').value
		var rate = document.querySelector('#rate').value

		var savedPrice = originPrice * (rate/100)
		var resultPrice = originPrice - savedPrice

		document.querySelector('#showResult').innerHTML = "상품의 원래 가격은 " + originPrice + "원이고, 할인율은 " + rate + "%입니다. "
			+ savedPrice + "원을 절약한 " + resultPrice + "원에 살 수 있습니다"
	}
</script>
```

**템플릿 문자열**
```
문자열 안에 값을 채우는 방법.
문자열을 ``로 묶고 값이 들어가는 부분은 ${}사이에 표시 함.
```

**==연산자와 ===연산자의 차이점**
==연산자는 자료형이 다를 경우 자동변환해서 비교함.
===연산자는 자료형을 변환하지 않고 비교함.

**서로 다른 연산자를 계산하는 순서**
- 다른 분류일 때
```
단항 -> 산술 -> 비교 -> 논리 -> 할당
```
- 같은 분류일 때

||1st|2nd|3rd|4th|5th|6th|7th
--|--|--|--|--|--|--|--
단항|!|++|--
산술|*|/|%|+|-
비교|<|<=|>|>=|==|!=|===
논리|&&|\\|\\|
할당|=|+=|-=|*=|/=|%=

## 04
### if-else문, 조건연산자
**3의 배수 만들기**
```js
var num = prompt("숫자를 입력하세요")
// document.write(typeof(num)) // string

if(num != null) {
	num = parseInt(num)

	if(num % 3 == 0) document.write("3의 배수")
	else document.write("3의 배수가 아님")
}
else {
	alert("취소")
}
```

### switch문 (조건이 많을 때 사용)
```js
var session = prompt("관심 세션 선택\n1-마케팅 2-개발 3-디자인", "1")

if(session != null) {
	switch(session) {
		case "1":
			document.write("마케팅")
		case "2":
			document.write("개발")
		case "3":
			document.write("디자인")
	}
}
else {
	alert("취소")
}
```
### for (중첩for문)
**구구단**
```js
for(let i = 2; i < 10; i++) {
	for(let j = 1; j < 10; j++) {
		document.write(i + " * " + j + " = " + i*j)
		document.write("<br/>")
	}
	document.write("-------------------")
	document.write("<br/>")
}
```
### while
**팩토리얼 계산**
```js
var n = prompt("숫자를 입력")
var nFact = 1 // 팩토리얼 계산 결과값 저장 변수
var i = 2 // 카운터

while (i <= n) {
	nFact = nFact * i
	i++
}

document.write(n + "!=" + nFact)
```
### breack, continue

## 함수
- 전역변수는 최소한으로 사용
- var변수는 함수의 시작부분에서 선언
- for문에서 카운터 변수를 사용할 때는 블록 변수를 사용하는 것이 좋다

### 익명함수
```js
var add = function(a, b) {
	return a+b
}
var sum = add(10, 20)
sum // 30출력
```

### 즉시 실행 함수
```js
var result = (function() {
	return 10 + 20
}())
console.log(result) // 30

var result2 = (function(a, b) {
	return a+b
}(10, 40))
console.log(result2) // 30
```

### 화살표 함수
```js
const hi = () => "안녕"

let hi2 = user => document.write(user + "님 안녕")

let sum = (a, b) => a+b
```
함수 내용이 한 줄뿐이면 간략하게 줄일 수 있다

## 이벤트
### 마우스 이벤트
속성 | 설명
-- | --
click | html요소를 마우스로 눌렀을 때 발생
dbclick | html요소를 마우스로 두번 눌렀을 때 발생
mousedown | 요소 위에서 마우스 버튼을 누르는 동안 발생
mousemove | 요소 위에서 마우스 포인터를 움직일 때 발생
mouseover | 마우스 포인터가 요소 위로 옮겨질 때 발생
mouseoust | 마우스 포인터가 요소를 벗어날 때 발생
mouseup | 사용자가 누르고 있던 마우스 버튼에서 손을 뗄 때 발생

### 키보드 이벤트
속성 | 설명
-- | --
keypress | 키를 눌렀을 때 발생
keydown | 키를 누르는 동안 발생
keyup | 키에서 손을 뗄 때 발생

### 문서 로딩 이벤트
속성 | 설명
-- | --
abort | 웹 문서가 완전히 로딩되기 전에 불러오기를 멈췄을 때 발생
error | 문서가 정확히 로딩되지 않았을 때 이벤트가 발생
load | 문서 로딩이 끝나면 발생
resize | 문서 화면 크기가 바뀌었을 때 발생
scroll | 문서 화면이 스크롤 되었을 때 발생
unload | 문서를 벗어날 때 발생

### 폼 이벤트
속성 | 설명
-- | --
blur | 폼 요소에 포커스를 잃었을 때 발생
change | 목록이나 체크 상태 등이 변경되었을 때 발생<br/>(input, select, textarea 태그에서 사용)
focus | 폼 요서에 포커스가 놓였을 때 발생<br/>(label, select, textarea, button에서 사용)
reset | 폼이 다시 시작되었을 때 발생
submit | submit 버튼을 눌렀을 때 발생

## 객체
### 객체 인스턴스 만들기
```js
var now = new Date()
```
### 리터럴 표기법으로 객체 만들고 속성 추가하기
```js
var book = {
	title: "자바스크립트",
	author: "고쌤",
	pages: 500,
	price: 15000,
	info: function() {
		alert(this.title + "책의 분량은 " + this.pages + "쪽입니다.")
	}
}

book.title // "자바스크립트" 출력
book.info() // 알림창 출력

book.field = "IT" // field: "IT" 추가
```

# 07 여행 준비물 점검 프로그램 만들기
**간단한 디자인**

<img src="./07/assets/img/img1.PNG">

## 과정
1. 배열로 준비목록 만들기
2. 챙길 물건은 push()함수로 배열에 추가하기
3. 추가한 내용을 화면에 표시하기
4. 챙긴 물건들은 목록에서 삭제버튼으로 삭제하기(splice()함수 사용)

```textarea
응용버전 삭제를 하지않고 취소선 혹은 배경색을 다른색으로 표현하기 등이 있습니다.
```

# 08 참가신청 프로그램
1. 버튼에 이벤트 함수 지정
2. 이벤트 함수 정의
3. 웹 브라우저에서 확인

