// newRegister 정의
function newRegister() {
    var newP = document.createElement("p") // new P tag create
    var delBtn = document.createElement("span")

    var userName = document.querySelector("#userName") // 새 텍스트필드 내용 가져오기
    var newText = document.createTextNode(userName.value) // 새 텍스트 노드 만들기
    var delBtnText = document.createTextNode("X")
    
    newP.appendChild(newText) // newText노드를 newP 자식노드로 연결
    delBtn.appendChild(delBtnText)
    newP.appendChild(delBtn)

    // class추가하기
    newP.setAttribute("class", "user")
    delBtn.setAttribute("class", "delBtnAttr")
    // delBtn을 registerList의 자식노드로 추가한 후 속성을 적용해야한다
    // 그렇지 않으면 에러가 발생한다

    var registerList = document.querySelector("#registerList") // registerList 가져오기
    registerList.appendChild(newP)

    // p요소를 #registerList 맨 앞에 추가하기
    registerList.insertBefore(newP, registerList.childNodes[0])

    userName.value = ""

    var removeBttns = document.querySelectorAll(".delBtnAttr")

    for (var i = 0; i < removeBttns.length; i++) {
        removeBttns[i].addEventListener("click", function() {
            // 현재 노드의 부모노드의 부모 노드가 있을 경우
            if(this.parentNode.parentNode) {
                // 현재 노드의 부모 노드의 부모 노드를 찾아 현재 노드의 부모 노드(p) 삭제
                this.parentNode.parentNode.removeChild(this.parentNode)
            }
        })
    }
}