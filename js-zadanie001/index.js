// let pica = [12, "Anna", 9, "Sam", 10, "Kate", 9, "Ron"];
// for (let i = 0; i < pica.length; i++) {
//     if (typeof pica[i] === "string") {
//         console.log(pica[i] + " - string value");
//     } else {
//         console.log(pica[i] + " - number value");
//     }
// }


// let pica = ["Anna", 12, "Sam", 9, "Kate", 10, "Ron", 9];
// pica.forEach(pic=>{
//     if (typeof pic === "string") {
//         console.log(pic + " - string value");
//     } else {
//         console.log(pic + " - number value");
//     }
// });


let pica = [12, "Anna", 37, "Maksim", 9, "Sam", 45, "Ron"]
pica.forEach(i => console.log(`${i} - ${typeof i} value`));