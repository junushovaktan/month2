let color = prompt("будтье любезны задать  цвет")
switch (color) {
    case "красный":
        document.getElementsByClassName('red')[0].style.background = "red";
    alert("STOP!");
    break;
  case "жёлтый":
  document.getElementsByClassName('yellow')[0].style.background = "gold";
    alert("Be ready)");
    break;
  case "зелёный":
  document.getElementsByClassName('green')[0].style.background = "lime";
    alert("Lets go!");
    break;
  default:
    alert('unknown color');
}