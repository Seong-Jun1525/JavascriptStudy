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

