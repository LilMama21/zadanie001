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

// Задание 2
// Вывести какой день недели бýло 4 марта 2000 года
let dat = new Date(2000, 2, 4, 0, 0, 0, 0);
console.log(dat);


// Задание 1
// Создать дату 18 декабря 2019 года, 12 часов, 20 минут
let date1 = new Date(2019, 11, 18, 12, 20, 0, 0);
console.log(date1);


let maxDate = new Date(1590749435756);
let isoDate = maxDate.toISOString(); 
isoDate.substr(0, 10);
console.log(maxDate);
