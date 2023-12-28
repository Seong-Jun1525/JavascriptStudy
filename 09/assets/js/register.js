let userId = document.querySelector("#id")
let pw1 = document.querySelector("#pw")
let pw2 = document.querySelector("#checkPw")

userId.onchange = checkedId
pw1.onchange = checkedPw
pw2.onchange = comparePw

function checkedId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("4~15자리의 영문과 숫자를 사용하세요")
        userId.select()
    }
}

function checkedPw() {
    if(pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.")
        pw1.value = ""
        pw1.focus()
    }
}

function comparePw() {
    if(pw1.value !== pw2.value) {
        alert("비밀번호가 일치하지 않습니다.")
        pw2.value = ""
        pw2.focus()
    }
}