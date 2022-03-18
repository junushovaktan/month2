// const blocks = document.getElementsByClassName("block");
// console.log(blocks)

// const blocks3 = document.getElementById("b3")
// console.log(blocks3.classList)
//
//
// blocks3.classList.add("ChangeClass");
// blocks3.classList.remove("ChangeClass")


// blocks3.onclick = () => {
//     blocks3.classList.toggle('active')
// }
// console.log(blocks3.classList);

const button = document.getElementById('button');
const input = document.getElementById('input');

button.onclick = () => {
    const div = document.createElement('div')
    const deletebutton = document.createElement('button')
    deletebutton.innerText = "delete"
    deletebutton.onclick = (e) => {
        console.log(e)
    }

    div.setAttribute('class', 'block');
    div.innerText = input.value;

    div.append(deletebutton)
    document.body.append(div)
}