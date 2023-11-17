function multi3() {
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
}
function switchTest() {
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
}
function forOf() {
    let seasons = ["봄", "여름", "가을", "겨울"]
    for(let i of seasons) {
        document.write(i + " ")
    }
}
function gugudan() {
    for(let i = 2; i < 10; i++) {
        for(let j = 1; j < 10; j++) {
            document.write(i + " * " + j + " = " + i*j)
            document.write("<br/>")
        }
        document.write("-------------------")
        document.write("<br/>")
    }
}
function factorial() {
    var n = prompt("숫자를 입력")
    var nFact = 1 // 팩토리얼 계산 결과값 저장 변수
    var i = 2 // 카운터

    while (i <= n) {
        nFact = nFact * i
        i++
    }

    document.write(n + "!=" + nFact)
}
function evenAdd() {
    let sum = 0
    for(let i = 1; i <= 10; i++) {
        if(i % 2 == 0) {
            sum += i
        }
    }

    document.write(sum)
}

// 장난감 객체 만들기
function ToyRobot() {
    var toy = {
        productId: "123-12",
        name: "Robot",
        price: "25,000",
        madeIn: "Korea",
        quantity: 10,
        showStock: function() {
            alert(this.name+" 제품은 " + this.quantity + "개 남았다") 
        }
    }
    
    toy.showStock()
}

// 생성자 함수로 도서목록 객체 만들기
function BookObject() {
    function Book(title, author, volume, price) {
        this.title = title
        this.author = author
        this.volume = volume
        this.price = price
    }
    
    var htmlB = new Book("웹 표준의 정석", "Ko", "608", 28000)
    var jsB = new Book("모던 자바스크립트", "Ko", "123", 24000)
    var reactB = new Book("React JS", "Ko", "321", 22000)
    
    var bookList = [htmlB, jsB, reactB]
    
    document.write("<h1>책 제목 살펴보기</h1>")
    for(var i = 0; i < bookList.length; i++) {
        document.write("<p>" + bookList[i].title + "</p>")
    }
}