var itemList = [] // 여행 준비 목록 배열 생성 및 초기화

var addBtn = document.querySelector("#add") // html 파일에서 요소의 id 속성이 add인것을 찾기
addBtn.addEventListener("click", addList) // addEventListener함수를 사용해서 해당 요소가 click이벤트가 발생했을 때 addList()함수 실행

// addList() 함수 정의
function addList() {
    var item = document.querySelector("#item").value // querySelector함수를 사용해 html파일에서 id 속성이 item인 것을 찾아서 해당 값을 item에 저장
    if(item != null) { // item의 값이 null이 아닐 때 실행. 즉, item의 값이 있을 때
        itemList.push(item) // push()함수를 사용해서 item을 itemList 배열에 넣는다
        document.querySelector("#item").value = "" // 값을 넣고 나면 querySelector 함수를 사용해서 id가 item인 요소의 값을 ""으로 초기화 해준다.
        document.querySelector("#item").focus() // 그리고 나서 해당 요소에 focus함수를 사용해서 focus를 해준다
    }
    console.log(item) // 아이템의 값을 콘솔로 출력
    showList()
}

// showList() 함수 정의
function showList() {
    var list = "<ul>"
    for (var i = 0; i < itemList.length; i++) {
        // itemList의 값이 추가되면 그 값을 for문을 통해서 li가 반복되게 해서 itemList의 값들을 list 변수에 계속 저장한다
        list += "<li><span class='item'>" + itemList[i] + "</span><span class='close' id=" + "i" + ">X</span>" + "</li>"
    }
    list += "</ul>" // 마지막으로 list변수에 ul의 닫는 태그를 넣어서 마무리를 해준다

    document.querySelector("#itemList").innerHTML = list // list를 innerHTML을 사용해서 html 파일에서 id속성이 itemList인 곳에 포함시킨다
    var remove = document.querySelectorAll(".close") // 삭제 버튼을 변수로 저장해서 배열 형태가 됨
// 여행 준비 목록은 준비했으면 준비한 것들은 하나씩 지우면서 준비해야할 것들을 전부 챙기는게 목적이므로 결과는 다 삭제되는 것이다
// 그래서 변수명과 class명을 알기쉽게 remove와 close로 지정하고 배열로 만든다

    for(var i = 0; i < remove.length; i++) { // remove 배열의 모든 요소들을 확인 => 즉, 여행 준비 목록들을 모두 확인하기
        remove[i].addEventListener("click", removeList) // 요소를 클릭했을 때 removeList()함수 실행
    }
}

// removeList() 함수 정의
function removeList() {
    console.log(this) // this의 값이 무엇인지 확인하기 (내가 입력한 값)
    var id = this.getAttribute("id")
    itemList.splice(id, 1)
    // 원하는 위치의 요소를 추가 or 삭제하는 splice함수를 사용
    // splice(인자1, 인자2, 인자3)
    // 인자가 1개일 경우: 인수가 가리키는 인덱스요소부터 끝까지 전부 삭제
    // 인자가 2개일 경우: 인자1은 인덱스 값, 인자2는 삭제할 갯수 (인덱스값부터 삭제할 갯수만큼 삭제)
    // 인자가 3개일 경우: 인자1 삭제를 시작할 위치, 인자2 삭제할 갯수, 인자3 앞서 삭제한 위치에 새로 추가할 요소 지정
    //                   즉, 해당 위치부터 원하는 만큼 삭제후 그 자리에 다른 값들을 넣는다
    showList()
}

