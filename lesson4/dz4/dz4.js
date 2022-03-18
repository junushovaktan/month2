let noll = document.getElementById("noll");
let num = 0;

function pribav() {
   num++
   noll.innerHTML = num;
}
function otnimi() {
   num--
    if (num < 1){
        num = 0;
    }
   noll.innerHTML = num;
}

function res() {
    num = 0;
    if (num < 1){
        num = 0;
    }
    noll.innerHTML = num;
}












