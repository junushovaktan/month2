const a = ' a';
const b = ' b';
const c = ' c';
const d = ' d';
const e = ' e';

const all = a.concat(b, c, d, e)
console.log(all);

const obj = {
    key:  "1",
    key2: "2",
    key3: "3",
    key4: "4",
    key5: "5"
}
const obj2 = {
    ...obj,
    key6: "6",
    key7: "7",
    key8: "8"
}
console.log(obj2);

btn.onclick = function () {
     let v = document.getElementById('inp').value;
     document.getElementById('al').innerHTML = 'Салам Попалам  '+ v + ' :))';
}
