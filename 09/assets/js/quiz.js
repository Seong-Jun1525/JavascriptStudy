var price = 24000;
var sideMenu = document.querySelectorAll(".orderPrice");
var total = document.querySelector("#total");
total.value = price+"원";

for(i=0; i<sideMenu.length; i++) {
    sideMenu[i].onclick = function() {
      if(this.checked == true) {
        price += parseInt(this.value);
      }
      else {
         price -= parseInt(this.value);        
      }
      total.value = price+"원";
    } 
}

let radius = document.querySelector("#radius")
let round = document.querySelector("#round")
let area = document.querySelector("#area")
let btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    round.value = `${radius.value*2*3.14}`
    area.value = `${radius.value*radius.value*3.14}`
})