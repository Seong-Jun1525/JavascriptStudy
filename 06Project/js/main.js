var nowDate = new Date()
var firstDate = new Date("2014-10-24")

var toNow = nowDate.getTime()
var toFirst = firstDate.getTime()

var passedTime = toNow - toFirst

var passedDay = Math.round(passedTime/(1000*60*60*24))

document.querySelector("#accent").innerText = passedDay + "일"

function calcDate(days) {
    var future = toFirst + days * (1000*60*60*24)
    var someDay = new Date(future)

    var year = someDay.getFullYear()
    var month = someDay.getMonth() + 1 // 0 ~ 11 이라 + 1을 해야함
    var day = someDay.getDate()

    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + day + "일"
}

calcDate(100)
calcDate(200)
calcDate(300)
calcDate(400)
calcDate(500)
