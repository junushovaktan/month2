const min = document.getElementById("minus");
const plus = document.getElementById("plus");

const noll = document.getElementById("noll");
let num = 0;

min.addEventListener("click", function() {
  num -= 1;
  noll.innerHTML = num;
})

plus.addEventListener('click', function () {
    num += 1;
    noll.innerHTML = num;

})
if (num < 0) {
    clearInterval(interval)
}

let interval = setInterval('-1')