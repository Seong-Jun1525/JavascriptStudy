var check = document.querySelector("#orderInfo")
check.addEventListener("click", function() {
    if(check.checked == true) {
        document.querySelector("#deliveryName").value = document.querySelector("#orderName").value
        document.querySelector("#deliveryPhoneNum").value = document.querySelector("#orderPhoneNum").value
        document.querySelector("#deliveryAddress").value = document.querySelector("#orderAddress").value  
    } else {
        document.querySelector("#deliveryName").value = ""
        document.querySelector("#deliveryPhoneNum").value = ""
        document.querySelector("#deliveryAddress").value = ""
    }
})