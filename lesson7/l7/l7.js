// // class dog {
// //     constructor(weight, height, color) {
// //         this.weight = weight;
// //         this.height = height;
// //         this.color = color;
// //     }
// // }
// // const rex = new dog(40, 1.5, 'violet');
// // const bobik = new dog(3, 30, 'yellow');
// //
// //
// // console.log(rex);
// // console.log(bobik);
//
// //1: Абстрактный класс
//
// class animal {
//     constructor(type, gender, color, voiceText, ) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//     voice() {
//         console.log(this.voiceText)
//     }
// }
//
// class dog extends  animal{
//     constructor(type, gender, color, voiceText, mame, purposeText) {
//         super(type, gender, color, voiceText);
//         this.name = name;
//         this.purposeText = purposeText;
//     }
//     purpose () {
//         console.log(`Dog: ${this.name} \n Purpose: ${this.purposeText}`)
//     }
// }
//
// const rex = new dog (
//     'хищник',
//     'male',
//     'pink',
//     'gaf gaf',
//     'Tuzik',
//     'security'
// )
// rex.purpose();
//
// const bublik = new dog(
//     'domestic',
//     'female',
//     'red',
//     'tyaf tyaf!',
//     'bublik',
//     'face control'
// )
//
// bublik.purpose();


class home {
    constructor(color, height, floor, weight, materials, door, roof, faceWhole, rightWhole, leftWhole, backWhole) {
        this.color = color;
        this.height = height;
        this.floor = floor;
        this.weight = weight;
        this.materials = materials;
        this.door = door;
        this.roof = roof;
        this.faceWhole = faceWhole;
        this.rightWhole = rightWhole;
        this.leftWhole = leftWhole;
        this.backWhole = backWhole
    }
}
class house extends  home{
    constructor(color, height, floor, weight, materials, door, roof, faceWhole, rightWhole, leftWhole, backWhole, form) {
        super(color, height, floor, weight, materials, door, roof, faceWhole, rightWhole, leftWhole, backWhole);
        this.form = form
    }
    form () {
        console.log(`Color: ${this.color} \n Height: ${this.height} \n floor: ${this.floor} \n Weight: ${this.weight} \n Materials: ${this.materials} \n Door: ${this.door} \n roof: ${this.roof}`)
    }
}
const ght = new house (
    'black',
    '4m',
    '10',
    '300m',
    'kirpich',
    'purple',
    'pink',
    'green',
    'white',
    'yellow',
    'red',
)
console.log(ght)
// const dom = new home ('black', '4m', '10', '300m', 'kirpich', 'purple', 'pink', 'green','white', 'yellow', 'red',)

