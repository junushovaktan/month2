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
const dv3 = []
const v = document.querySelector("#inp")
const bt = document.querySelector("#btn")

function render() {
    const div = document.createElement('div');
    div.setAttribute("class", "dv3");
    for(let i = 0; i < dv3.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "doing");
        const p = document.createElement("p");
        p.innerHTML = dv3[i].text;
        divList.append(p);
        div.append(divList);
    }
    const form = document.querySelector(".dv1");
    document.querySelector(".dv3").remove();
    form.append(div)
}

bt.onclick = function() {
    const obj = {
        id: dv3.length,
        text: "Салам попалам " + v.value + " :)"
    }
    this.append(dv3);
    dv3.push(obj);
    render()
};
